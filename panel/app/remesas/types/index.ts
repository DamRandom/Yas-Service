export interface Card {
  id: number;
  alias: string;
  userName: string;
  phone: string;
  manager: string | null;
  bankName: string | null;
  saldo: number;
  lastUsedAt: string | null;
  createdAt: string;
}

export interface Remesa {
  id: number;
  remitenteNombre: string;
  remitenteTelefono: string;
  destinatarioNombre: string;
  destinatarioTelefono: string;
  montoPEN: number;
  montoCUP: number;
  tarjetaOrigenId: number;
  tarjetaDestinoId: number;
  fecha: string;
  tarjetaOrigenAlias?: string;
  tarjetaOrigenBanco?: string;
  tarjetaDestinoAlias?: string;
  tarjetaDestinoBanco?: string;
}

export interface Stats {
  totalPEN: number;
  totalCUP: number;
  totalSaldo: number;
}

export type Tab = "historial" | "tarjetas" | "estadisticas";

export interface RemesaFormData {
  remitenteNombre: string;
  remitenteTelefono: string;
  destinatarioNombre: string;
  destinatarioTelefono: string;
  montoPEN: string;
  tarjetaOrigenId: string;
  tarjetaDestinoId: string;
}

export interface CardFormData {
  alias: string;
  userName: string;
  phone: string;
  manager: string;
  saldo: string;
  bankName: string;
}

