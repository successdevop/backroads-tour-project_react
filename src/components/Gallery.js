import { gallery } from "../data/data";

export const Gallery = () => {
  return (
    <section id="gallery">
      <div className="gallery-center">
        {/* <!-- single item --> */}
        {gallery.map((item) => {
          const { id, img } = item;
          return (
            <article className="gallery-img-container" key={id}>
              <img src={img} className="gallery-img" alt={img} />
              <a href="www.google.com" className="gallery-icon">
                <i className="fas fa-search"></i>
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};
