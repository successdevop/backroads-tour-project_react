export const Title = (props) => {
  return (
    <div className="section-title">
      <h2>
        {props.text1} <span>{props.text2}</span>
      </h2>
    </div>
  );
};
