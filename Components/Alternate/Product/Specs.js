const Specs = (props) => {
  const specs = props.specs;
  return (
    <div className="specs">
      {specs.map((spec, i) => {
        return (
          <div className="specRow" key={i}>
            <label>{spec.key}</label>
            <div className="values">
              {typeof spec.value == "object" ? (
                spec.value.map((v, i) => {
                  return <p key={i}>{v}</p>;
                })
              ) : (
                <p>{spec.value}</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Specs;
