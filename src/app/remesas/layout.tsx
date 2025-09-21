export default function RemesasLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="remesas-layout antialiased">
      {children}
    </section>
  );
}
