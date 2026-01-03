import { useState, useEffect } from "react";
import type { Card, Remesa, Stats, Tab, RemesaFormData, CardFormData } from "../types";

const API_URL = "http://127.0.0.1:3001";

export function useRemesasData(activeTab: Tab) {
  const [remesas, setRemesas] = useState<Remesa[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [stats, setStats] = useState<Stats>({ totalPEN: 0, totalCUP: 0, totalSaldo: 0 });
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Login automático para obtener token
  useEffect(() => {
    const login = async () => {
      try {
        const response = await fetch(`${API_URL}/login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username: "admin", password: "admin123" }),
        });

        if (!response.ok) {
          const text = await response.text();
          console.error("Error en login:", response.status, text);
          return;
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          const text = await response.text();
          console.error("Respuesta no es JSON:", text.substring(0, 100));
          return;
        }

        const data = await response.json();
        if (data.token) {
          setToken(data.token);
          localStorage.setItem("token", data.token);
          setError(null);
        }
      } catch (error) {
        console.error("Error al hacer login:", error);
        setError("No se pudo conectar con el servidor. Asegúrate de que el backend esté corriendo en http://127.0.0.1:3001");
      }
    };
    login();
  }, []);

  // Cargar datos
  useEffect(() => {
    if (token) {
      loadData();
    }
  }, [token, activeTab]);

  const loadData = async () => {
    if (!token) return;
    setLoading(true);
    try {
      const headers = { Authorization: `Bearer ${token}` };

      // Cargar remesas
      if (activeTab === "historial" || activeTab === "estadisticas") {
        try {
          const remesasRes = await fetch(`${API_URL}/remesas`, { headers });
          if (!remesasRes.ok) {
            console.error(`Error ${remesasRes.status}: ${remesasRes.statusText}`);
            setRemesas([]);
            if (remesasRes.status === 401 || remesasRes.status === 403) {
              setError("Error de autenticación. Por favor, recarga la página.");
            }
          } else {
            const contentType = remesasRes.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const remesasData = await remesasRes.json();
              setRemesas(remesasData || []);
            } else {
              const text = await remesasRes.text();
              console.error("Respuesta no es JSON para remesas:", text.substring(0, 200));
              setRemesas([]);
            }
          }
        } catch (error) {
          console.error("Error al cargar remesas:", error);
          setRemesas([]);
          setError("Error al conectar con el servidor. Verifica que el backend esté corriendo.");
        }

        try {
          const statsRes = await fetch(`${API_URL}/remesas/stats`, { headers });
          if (!statsRes.ok) {
            console.error(`Error ${statsRes.status}: ${statsRes.statusText}`);
          } else {
            const contentType = statsRes.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const statsData = await statsRes.json();
              setStats(statsData || { totalPEN: 0, totalCUP: 0, totalSaldo: 0 });
            } else {
              const text = await statsRes.text();
              console.error("Respuesta no es JSON para stats:", text.substring(0, 200));
            }
          }
        } catch (error) {
          console.error("Error al cargar estadísticas:", error);
        }
      }

      // Cargar tarjetas
      if (activeTab === "tarjetas" || activeTab === "historial" || activeTab === "estadisticas") {
        try {
          const cardsRes = await fetch(`${API_URL}/cards`, { headers });
          if (!cardsRes.ok) {
            console.error(`Error ${cardsRes.status}: ${cardsRes.statusText}`);
            setCards([]);
            if (cardsRes.status === 401 || cardsRes.status === 403) {
              setError("Error de autenticación. Por favor, recarga la página.");
            }
          } else {
            const contentType = cardsRes.headers.get("content-type");
            if (contentType && contentType.includes("application/json")) {
              const cardsData = await cardsRes.json();
              setCards(cardsData || []);
            } else {
              const text = await cardsRes.text();
              console.error("Respuesta no es JSON para cards:", text.substring(0, 200));
              setCards([]);
            }
          }
        } catch (error) {
          console.error("Error al cargar tarjetas:", error);
          setCards([]);
          setError("Error al conectar con el servidor. Verifica que el backend esté corriendo.");
        }
      }
    } catch (error) {
      console.error("Error general al cargar datos:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateRemesa = async (remesaForm: RemesaFormData) => {
    if (!token) return;

    // Calcular monto en CUP (tasa de cambio aproximada: 1 PEN = 24 CUP)
    const montoPEN = parseFloat(remesaForm.montoPEN);
    const montoCUP = montoPEN * 24;

    try {
      const response = await fetch(`${API_URL}/remesas`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          remitenteNombre: remesaForm.remitenteNombre,
          remitenteTelefono: remesaForm.remitenteTelefono,
          destinatarioNombre: remesaForm.destinatarioNombre,
          destinatarioTelefono: remesaForm.destinatarioTelefono,
          montoPEN: montoPEN,
          montoCUP: montoCUP,
          tarjetaOrigenId: parseInt(remesaForm.tarjetaOrigenId),
          tarjetaDestinoId: parseInt(remesaForm.tarjetaDestinoId),
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          loadData();
          alert("Remesa creada exitosamente");
          return true;
        } else {
          const text = await response.text();
          console.error("Respuesta no es JSON:", text);
          alert("Error: Respuesta inválida del servidor");
          return false;
        }
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          alert(`Error: ${error.error || "Error desconocido"}`);
          return false;
        } else {
          const text = await response.text();
          console.error("Error response:", text);
          alert(`Error: ${response.status} ${response.statusText}`);
          return false;
        }
      }
    } catch (error) {
      console.error("Error al crear remesa:", error);
      alert("Error al crear remesa");
      return false;
    }
  };

  const handleCreateCard = async (cardForm: CardFormData) => {
    if (!token) return;

    try {
      const response = await fetch(`${API_URL}/cards`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          alias: cardForm.alias,
          userName: cardForm.userName,
          phone: cardForm.phone,
          manager: cardForm.manager || null,
          saldo: parseFloat(cardForm.saldo),
          bankName: cardForm.bankName || null,
        }),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          loadData();
          alert("Tarjeta creada exitosamente");
          return true;
        } else {
          const text = await response.text();
          console.error("Respuesta no es JSON:", text);
          alert("Error: Respuesta inválida del servidor");
          return false;
        }
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          alert(`Error: ${error.error || "Error desconocido"}`);
          return false;
        } else {
          const text = await response.text();
          console.error("Error response:", text);
          alert(`Error: ${response.status} ${response.statusText}`);
          return false;
        }
      }
    } catch (error) {
      console.error("Error al crear tarjeta:", error);
      alert("Error al crear tarjeta");
      return false;
    }
  };

  const handleMarkCardUsed = async (cardId: number) => {
    if (!token) return;
    if (!confirm("¿Marcar esta tarjeta como usada?")) return;

    try {
      const response = await fetch(`${API_URL}/cards/${cardId}/use`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({}),
      });

      if (response.ok) {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          loadData();
          alert("Tarjeta marcada como usada");
          return true;
        } else {
          const text = await response.text();
          console.error("Respuesta no es JSON:", text);
          alert("Error: Respuesta inválida del servidor");
          return false;
        }
      } else {
        const contentType = response.headers.get("content-type");
        if (contentType && contentType.includes("application/json")) {
          const error = await response.json();
          alert(`Error: ${error.error || "Error desconocido"}`);
          return false;
        } else {
          const text = await response.text();
          console.error("Error response:", text);
          alert(`Error: ${response.status} ${response.statusText}`);
          return false;
        }
      }
    } catch (error) {
      console.error("Error al marcar tarjeta:", error);
      alert("Error al marcar tarjeta");
      return false;
    }
  };

  return {
    remesas,
    cards,
    stats,
    loading,
    error,
    handleCreateRemesa,
    handleCreateCard,
    handleMarkCardUsed,
    loadData,
  };
}

