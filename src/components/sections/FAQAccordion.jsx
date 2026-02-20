import { useState } from "react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const FAQ = [
  {
    q: "A consulta online funciona mesmo?",
    a: "Sim. (Placeholder) Para muitas pessoas, o formato online é confortável e eficaz. O essencial é teres um espaço com privacidade e ligação estável.",
  },
  {
    q: "Quanto tempo dura uma sessão?",
    a: "(Placeholder) Normalmente 50 minutos. Podemos ajustar consoante o tipo de acompanhamento.",
  },
  {
    q: "Como é garantida a confidencialidade?",
    a: "(Placeholder) As sessões decorrem em plataformas seguras e respeitam o dever de confidencialidade profissional. Recomenda-se um local privado do teu lado.",
  },
  {
    q: "Como posso marcar e quais são os próximos passos?",
    a: "(Placeholder) Podes contactar pela página de Contacto. Em breve, o site terá calendário com horários disponíveis e pagamento integrado.",
  },
  {
    q: "Qual é a política de cancelamento?",
    a: "(Placeholder) Cancelamentos com antecedência mínima (ex.: 24h). Esta informação será confirmada no momento da marcação.",
  },
];

function Item({ item, isOpen, onToggle }) {
  return (
    <div style={{ borderTop: "1px solid var(--border)" }}>
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: 0,
          padding: "14px 0",
          cursor: "pointer",
          display: "flex",
          justifyContent: "space-between",
          gap: 10,
          alignItems: "center",
        }}
        aria-expanded={isOpen}
      >
        <span style={{ fontWeight: 800 }}>{item.q}</span>
        <span aria-hidden="true" style={{ color: "var(--muted)", fontWeight: 900 }}>
          {isOpen ? "–" : "+"}
        </span>
      </button>

      {isOpen && (
        <p className="p" style={{ margin: "0 0 14px" }}>
          {item.a}
        </p>
      )}
    </div>
  );
}

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", gap: 16, flexWrap: "wrap" }}>
          <div>
            <h2 className="h2">Perguntas frequentes</h2>
            <p className="p" style={{ maxWidth: 760 }}>
              Respostas rápidas às dúvidas mais comuns. Se preferires, podes
              contactar diretamente.
            </p>
          </div>

          <Button as="a" href="/faq" variant="secondary">
            Ver FAQ completa
          </Button>
        </div>

        <div style={{ height: 18 }} />

        <Card>
          <div>
            {FAQ.map((item, idx) => (
              <Item
                key={item.q}
                item={item}
                isOpen={openIndex === idx}
                onToggle={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              />
            ))}
          </div>
        </Card>

        <div style={{ height: 18 }} />

        <div className="card" style={{ padding: 18, background: "rgba(242,204,143,0.22)" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap", alignItems: "center" }}>
            <div>
              <div style={{ fontWeight: 900, fontSize: 16 }}>Pronta(o) para dar o primeiro passo?</div>
              <p className="p" style={{ marginTop: 6 }}>
                Marca uma consulta online ou envia uma mensagem com a tua dúvida.
              </p>
            </div>
            <Button as="a" href="/contacto">Marcar consulta</Button>
          </div>
        </div>
      </div>
    </section>
  );
}