import Button from "../ui/Button";

export default function CTASticky() {
  return (
    <div style={{ position: "fixed", right: 16, bottom: 16, zIndex: 30 }}>
      <Button as="a" href="/contacto">Marcar</Button>
    </div>
  );
}