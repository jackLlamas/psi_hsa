import Card from "../ui/Card";
import Button from "../ui/Button";

const SERVICES = [
  {
    title: "Ansiedade e preocupações",
    desc: "Ferramentas para lidar com pensamentos repetitivos, ansiedade antecipatória e sintomas físicos.",
  },
  {
    title: "Stress e burnout",
    desc: "Organização, limites saudáveis e recuperação emocional para o dia a dia e trabalho.",
  },
  {
    title: "Autoestima e autoconfiança",
    desc: "Trabalhar autocrítica, autoimagem e padrões de exigência, com gentileza e consistência.",
  },
];

export default function ServiceCards() {
  return (
    <section className="section" style={{ paddingTop: 24 }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "end" }}>
          <div>
            <h2 className="h2">Áreas de acompanhamento</h2>
            <p className="p" style={{ maxWidth: 720 }}>
              Estas são algumas áreas comuns. O plano é sempre ajustado às tuas
              necessidades e objetivos.
            </p>
          </div>

          <Button as="a" href="/servicos" variant="secondary">
            Ver todos os serviços
          </Button>
        </div>

        <div style={{ height: 18 }} />

        <div className="grid grid-3">
          {SERVICES.map((s) => (
            <Card key={s.title} style={{ height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                <div style={{ fontWeight: 800, fontSize: 18 }}>{s.title}</div>
                <p className="p">{s.desc}</p>

                <div style={{ marginTop: 6 }}>
                  <Button as="a" href="/contacto">
                    Marcar
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div style={{ height: 14 }} />

        <p className="p" style={{ fontSize: 14 }}>
          Nota: Este site é informativo e não substitui cuidados médicos. Em
          situação de emergência, procura ajuda imediata.
        </p>
      </div>
    </section>
  );
}