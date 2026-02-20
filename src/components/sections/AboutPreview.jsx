import Card from "../ui/Card";
import Button from "../ui/Button";

export default function AboutPreview() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <Card>
          <div className="grid grid-2" style={{ alignItems: "center" }}>
            {/* placeholder “foto” */}
            <div
              style={{
                borderRadius: "var(--radius)",
                border: "1px solid var(--border)",
                background:
                  "linear-gradient(135deg, rgba(242,204,143,0.35), rgba(129,178,154,0.18), rgba(224,122,95,0.18))",
                minHeight: 220,
              }}
              aria-label="Fotografia da psicóloga (placeholder)"
            />

            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span className="badge">Sobre a Psicóloga</span>

              <h2 className="h2" style={{ marginTop: 6 }}>
                Acompanhamento com empatia, estrutura e evidência
              </h2>

              <p className="p">
                (Placeholder) Sou psicóloga clínica e acompanho pessoas em
                diferentes momentos de vida. O meu foco é criar um espaço seguro
                e sem julgamento, onde possas compreender padrões, ganhar
                ferramentas e construir mudanças sustentáveis.
              </p>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
                <Button as="a" href="/sobre">
                  Ler mais
                </Button>
                <Button as="a" href="/contacto" variant="secondary">
                  Marcar consulta online
                </Button>
              </div>

              <div style={{ color: "var(--muted)", fontSize: 14, fontWeight: 600 }}>
                Membro OPP • Consulta Online • Confidencialidade
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}