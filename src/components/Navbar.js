import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data/data";

export const Navbar = () => {
  return (
    <header id="home">
      {/* <!-- navbar --> */}
      <nav className="navbar">
        <div className="nav-center">
          {/* <!-- nav header --> */}
          <div className="nav-header">
            <img src={logo} className="nav-logo" alt="" />
            <button type="button" className="nav-toggle" id="nav-toggle">
              <i className="fas fa-bars"></i>
            </button>
          </div>
          {/* <!-- end of nav header --> */}
          {/* <!-- nav links --> */}
          <ul className="nav-links" id="nav-links">
            {/* <!-- single link --> */}
            {pageLinks.map((link) => {
              const { id, href, text } = link;
              return (
                <li key={id}>
                  <a href={href} className="nav-link scroll-link">
                    {text}
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <!-- end of nav links --> */}
          {/* <!-- nav icons --> */}
          <ul className="nav-icons">
            {/* <!-- single icon --> */}
            {socialLinks.map((link) => {
              const { id, href, icon } = link;
              return (
                <li key={id}>
                  <a
                    href={href}
                    target="_blank"
                    className="nav-icon"
                    rel="noreferrer"
                  >
                    <i className={icon}></i>
                  </a>
                </li>
              );
            })}
          </ul>
          {/* <!-- end of nav icons --> */}
        </div>
      </nav>
      {/* <!-- hero --> */}
      <div className="hero">
        <div className="hero-banner">
          <h1>continue exploring</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            inventore fugiat eius reprehenderit architecto ullam.
          </p>
          <a href="#featured" className="btn hero-btn scroll-link">
            explore tours
          </a>
        </div>
      </div>
    </header>
  );
};
