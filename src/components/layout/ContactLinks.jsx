import useIsMobile from "../../hooks/useIsMobile";

const contactInfo = [
  {
    id: 1,
    titleMob: "Email",
    titleDesktop: "Email",
    href: "mailto:hello@tobefrank.co.uk",
  },
  {
    id: 2,
    titleMob: "Insta",
    titleDesktop: "Instagram",
    href: "https://www.instagram.com/tobefrank/",
  },
  {
    id: 3,
    titleMob: "LinkedIn",
    titleDesktop: "LinkedIn",
    href: "https://www.linkedin.com/in/frank-hulley-jones-7b6a9827",
  },
  {
    id: 4,
    titleMob: "WaPo",
    titleDesktop: "Washington Post",
    href: "https://www.washingtonpost.com/people/frank-hulley-jones/",
  },
  {
    id: 5,
    titleMob: "Guardian",
    titleDesktop: "Guardian",
    href: "https://www.theguardian.com/profile/frank-hulley-jones",
  },
];

const ContactLinks = () => {
  const isMobile = useIsMobile();

  return (
    <section className="contact-links wrapper">
      <ul className="contact-links__list">
        {contactInfo.map((contact) => {
          return (
            <li className="contact-links__item" key={contact.id}>
              <a className="contact-links__link" href={contact.href}>
                {isMobile ? contact.titleMob : contact.titleDesktop}
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ContactLinks;
