import { NavLink } from "react-router-dom";
import Button from "../ui/Button";

export default function Header() {
  const link = ({ isActive }) => ({
    textDecoration: "none",
    padding: "10px 12px",
    borderRadius: 999,
    fontWeight: 650,
    color: isActive ? "var(--text)" : "var(--muted)",
    background: isActive ? "rgba(224,122,95,0.12)" : "transparent",
  });

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 20, backdropFilter: "blur(10px)", background: "rgba(255,247,242,0.75)", borderBottom: "1px solid var(--border)" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 16px" }}>
        <NavLink to="/" style={{ textDecoration: "none", fontWeight: 800, letterSpacing: 0.2 }}>
          Psicologia Online
        </NavLink>

        <nav style={{ display: "flex", gap: 6, alignItems: "center", flexWrap: "wrap" }}>
          <NavLink to="/sobre" style={link}>Sobre</NavLink>
          <NavLink to="/servicos" style={link}>Serviços</NavLink>
          <NavLink to="/faq" style={link}>FAQ</NavLink>
          <NavLink to="/contacto" style={link}>Contacto</NavLink>
          <Button as="a" href="/contacto" style={{ marginLeft: 8 }}>Marcar consulta</Button>
        </nav>
      </div>
    </header>
  );
}