import LogoMark from "./LogoMark";

const Logo = ({ href = "/", context = "home", theme = "default" }) => {
  const rootClasses = [
    "logo",
    context === "home" ? "logo--home" : "",
    context === "article" ? "logo--article" : "",
    context === "article" ? `logo--theme-${theme}` : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header className={`${rootClasses} wrapper`} id="logo">
      <a className="logo__link" href={href} aria-label="Home">
        <LogoMark />
      </a>
    </header>
  );
};

export default Logo;
