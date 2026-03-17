import MickeyHand from "../MickeyHand";

const Footer = ({ theme = "" }) => {
  const currentYear = new Date().getFullYear();
  const footerClassName = ["footer", "wrapper", theme && `footer--theme-${theme}`]
    .filter(Boolean)
    .join(" ");

  return (
    <footer className={footerClassName}>
      <a className="footer__top" href="#top">
        <span className="footer__hand" aria-hidden="true">
          <MickeyHand direction="up" />
        </span>
        <span className="footer__label">Back to top</span>
      </a>

      <div className="footer__copyright">
        © {currentYear} Frank Hulley-Jones
      </div>
    </footer>
  );
};

export default Footer;
