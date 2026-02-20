export default function Card({ children, style }) {
  return (
    <div
      className="card"
      style={{
        padding: 20,
        boxShadow: "0 8px 20px rgba(42,31,27,0.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}