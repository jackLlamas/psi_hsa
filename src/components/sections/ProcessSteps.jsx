import Card from "../ui/Card";

const STEPS = [
  {
    title: "Escolhe a melhor opção",
    desc: "Conta-me o que procuras e definimos o objetivo inicial das sessões.",
    icon: "1",
  },
  {
    title: "Sessão online com privacidade",
    desc: "Encontro por videochamada num espaço seguro, com estrutura e acolhimento.",
    icon: "2",
  },
  {
    title: "Plano e acompanhamento",
    desc: "Trabalhamos com ferramentas práticas, ajustando o processo ao teu ritmo.",
    icon: "3",
  },
];

export default function ProcessSteps() {
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <h2 className="h2">Como funciona a consulta online</h2>
        <p className="p" style={{ maxWidth: 760 }}>
          Um processo simples, com clareza desde o início. Mais tarde, podes
          integrar calendário e pagamento automático — por agora, o foco é
          facilitar o primeiro passo.
        </p>

        <div style={{ height: 18 }} />

        <div className="grid grid-3">
          {STEPS.map((step) => (
            <Card key={step.title}>
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <div
                  aria-hidden="true"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 999,
                    display: "grid",
                    placeItems: "center",
                    background: "rgba(224,122,95,0.14)",
                    border: "1px solid var(--border)",
                    fontWeight: 900,
                    color: "var(--text)",
                  }}
                >
                  {step.icon}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  <div style={{ fontWeight: 850, fontSize: 16 }}>{step.title}</div>
                  <p className="p" style={{ margin: 0 }}>{step.desc}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}