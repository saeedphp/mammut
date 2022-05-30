const Text = (props) => {
  const name = props.name;
  const features = props.features;
  return (
    <div className="productText">
      <div className="text">
        <h4>{name}</h4>
        {features.map((feature, i) => {
          return (
            <h6 key={i}>
              {feature}
            </h6>
          )
        })}
      </div>
    </div>
  );
};

export default Text;
