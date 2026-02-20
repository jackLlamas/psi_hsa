export default function Button({ variant = "primary", as = "button", href, children, ...props }) {
  const className = `btn ${variant === "secondary" ? "btn-secondary" : "btn-primary"}`;

  if (as === "a") {
    return (
      <a className={className} href={href} {...props} style={{ textDecoration: 'none', display: 'inline-block' }}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}