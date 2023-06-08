import { tours } from "../data/data";
import { Title } from "./Title";
import { ToursInfo } from "./ToursInfo";

export const Features = () => {
  return (
    <section className="section" id="featured">
      {/* <!-- section-title --> */}
      <Title text1="featured" text2="tours" />
      {/* <!-- end of section-title --> */}
      {/* <!-- featured-center --> */}
      <div className="section-center featured-center">
        {/* <!-- single tour --> */}
        {tours.map((item) => {
          const { id, img, date, title, days, text, icon, country, price } =
            item;
          return (
            <ToursInfo
              key={id}
              img={img}
              date={date}
              title={title}
              days={days}
              text={text}
              icon={icon}
              country={country}
              price={price}
            />
          );
        })}
      </div>
      <div className="tour-btn">
        <a href="#featured" className="btn">
          all tours
        </a>
      </div>
    </section>
  );
};
