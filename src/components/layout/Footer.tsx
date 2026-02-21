export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t mt-20" style={{ borderColor: "hsl(var(--border))" }}>
      <div className="container max-w-5xl px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ color: "hsl(var(--muted-foreground))" }}>
          <p>© {year} Pedro Ventura · Backend · Integrações · Dados</p>
          <p className="font-mono" style={{ color: "hsl(var(--primary))" }}>v2.0.0</p>
        </div>
      </div>
    </footer>
  );
}
