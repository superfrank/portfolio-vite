import MickeyHand from "../MickeyHand";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer wrapper">
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
