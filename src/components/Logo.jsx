import LogoMark from "./LogoMark";

export default function Logo({
  href = "/",
  variant = "default", // "default" | "internet"
  home = false,
}) {
  const rootClasses = [
    "logo",
    home ? "logo--home" : "",
    variant === "internet" ? "logo--internet" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={rootClasses} id="logo">
      <a className="logo__link" href={href} aria-label="Home">
        <LogoMark />
      </a>
    </header>
  );
}
