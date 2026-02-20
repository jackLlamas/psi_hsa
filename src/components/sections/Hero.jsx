import Button from "../ui/Button";
import heroPhoto from "../../assets/to.jpg";

export default function Hero() {
  return (
    <section
      className="section"
      style={{
        paddingTop: 44,
        paddingBottom: 44,
        background:
          "radial-gradient(circle at 15% 20%, rgba(242,204,143,0.40), transparent 45%), radial-gradient(circle at 85% 10%, rgba(129,178,154,0.22), transparent 45%), radial-gradient(circle at 80% 85%, rgba(224,122,95,0.18), transparent 45%)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="container">
        <div
          className="grid"
          style={{
            alignItems: "center",
            gap: 28,
          }}
        >
          {/* texto (sem retângulo) */}
          <div>
            <span className="badge">Consultas de Psicologia • Online</span>

            <div style={{ height: 14 }} />

            <h1 className="h1" style={{ marginBottom: 10 }}>
              Dra. Helita Sousa
            </h1>

            <div
              style={{
                fontWeight: 750,
                color: "var(--muted)",
                marginBottom: 14,
              }}
            >
              Psicóloga • Membro OPP (placeholder)
            </div>

            <p className="p" style={{ fontSize: 18, maxWidth: 720 }}>
              Um espaço seguro e acolhedor para trabalhar ansiedade, stress,
              autoestima e bem-estar emocional. Sessões online com estrutura,
              empatia e confidencialidade.
            </p>

            <div style={{ height: 18 }} />

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Button as="a" href="/contacto">
                Marcar consulta online
              </Button>
              <Button as="a" href="/sobre" variant="secondary">
                Conhecer a psicóloga
              </Button>
            </div>

            <div style={{ height: 18 }} />

            <div
              style={{
                display: "flex",
                gap: 10,
                flexWrap: "wrap",
                color: "var(--muted)",
                fontWeight: 650,
                fontSize: 14,
              }}
            >
              <span>⏱️ 50 min</span>
              <span>•</span>
              <span>💻 Online</span>
              <span>•</span>
              <span>🔒 Confidencial</span>
            </div>
          </div>

          {/* foto (aqui sim pode ter “moldura” leve) */}
          <div
            style={{
              justifySelf: "end",
              width: "min(420px, 100%)",
            }}
          >
            <div
              className="card"
              style={{
                padding: 12,
                borderRadius: "calc(var(--radius) + 10px)",
                background: "rgba(255,255,255,0.65)",
              }}
            >
              <img
                src={heroPhoto}
                alt="Fotografia da psicóloga"
                style={{
                  width: "100%",
                  height: 360,
                  objectFit: "cover",
                  borderRadius: "calc(var(--radius) + 10px)",
                  border: "1px solid var(--border)",
                  display: "block",
                }}
              />

              <div style={{ height: 10 }} />

              <div
                style={{
                  display: "flex",
                  gap: 8,
                  flexWrap: "wrap",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <span
                  className="badge"
                  style={{ background: "rgba(224,122,95,0.12)" }}
                >
                  Atendimento 100% online
                </span>
                <span
                  style={{
                    color: "var(--muted)",
                    fontWeight: 700,
                    fontSize: 13,
                  }}
                >
                  Google Meet / Zoom
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* grid 2 colunas em desktop */}
        <style>{`
          @media (min-width: 900px) {
            .grid { grid-template-columns: 1.15fr 0.85fr; }
          }
        `}</style>
      </div>
    </section>
  );
}