import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", padding: "28px 0" }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", gap: 12, flexWrap: "wrap" }}>
        <div>
          <div style={{ fontWeight: 800 }}>Psicologia Online</div>
          <p className="p" style={{ marginTop: 6 }}>Consultas online com um espaço seguro e acolhedor.</p>
        </div>

        <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link to="/privacidade">Privacidade</Link>
          <Link to="/cookies">Cookies</Link>
          <Link to="/termos">Termos</Link>
        </div>
      </div>
    </footer>
  );
}