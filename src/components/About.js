import aboutImg from "../images/about.jpeg";
import { Title } from "./Title";

export const About = () => {
  return (
    <section className="section" id="about">
      {/* <!-- section-title --> */}
      <Title text1="about" text2="us" />
      {/* <!-- end of section-title --> */}
      <div className="section-center about-center">
        {/* <!-- about img wrapper --> */}
        <article className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </article>
        {/* <!-- about info --> */}
        <article className="about-info">
          <h3>explore the difference</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum,
            nisi aut ea natus rem distinctio dolores sunt ad iure!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque eum,
            nisi aut ea natus rem distinctio dolores sunt ad iure!
          </p>
          <a href="www.google.com" className="btn">
            {" "}
            read more
          </a>
        </article>
      </div>
    </section>
  );
};
