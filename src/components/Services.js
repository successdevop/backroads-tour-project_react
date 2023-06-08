import { Title } from "./Title";
import { Service } from "./Service";
import { servicesInfo } from "../data/data";

export const Services = () => {
  return (
    <section className="section services" id="services">
      {/* <!-- section-title --> */}
      <Title text1="our" text2="services" />
      {/* <!-- end of section-title --> */}
      <div className="section-center services-center">
        {/* <!-- single service --> */}
        {servicesInfo.map((item) => {
          const { id, icon, title, text } = item;
          return <Service key={id} icon={icon} title={title} text={text} />;
        })}
      </div>
    </section>
  );
};
