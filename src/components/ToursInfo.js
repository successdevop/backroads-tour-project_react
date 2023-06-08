export const ToursInfo = ({
  img,
  date,
  title,
  days,
  text,
  icon,
  country,
  price,
}) => {
  return (
    <article className="tour-card">
      <div className="tour-img-container">
        <img src={img} className="tour-img" alt={title} />
        <p className="tour-date">{date}</p>
      </div>
      {/* <!-- tour info --> */}
      <div className="tour-info">
        <div className="tour-title">
          <h4>{title}</h4>
          <p>{days}</p>
        </div>
        <p>{text}</p>
        <div className="tour-footer">
          <p>
            <span>
              <i className={icon}></i>
              {country}
            </span>
          </p>
          <p>from ${price}</p>
        </div>
      </div>
    </article>
  );
};
