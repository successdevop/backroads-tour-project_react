import { pageLinks, socialLinks } from "../data/data";

export const Footer = () => {
  return (
    <footer className="section footer">
      {/* <!-- footer links --> */}
      <ul className="footer-links">
        {/* <!-- single link --> */}
        {pageLinks.map((item) => {
          const { id, href, text } = item;
          return (
            <li key={id}>
              <a href={href} className="footer-link scroll-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      {/* <!-- footer icons --> */}
      <ul className="footer-icons">
        {/* <!-- single icon --> */}
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                className="footer-icon"
                rel="noreferrer"
              >
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      {/* <!-- end of footer icons --> */}
      <p className="copyright">
        copyright &copy; backroads travel tour company{" "}
        <span>{new Date().getFullYear()}</span>. all rights reserved
      </p>
    </footer>
  );
};
