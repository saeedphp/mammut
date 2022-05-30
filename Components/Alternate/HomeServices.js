const HomeServices = (props) => {
  const title = props.title;
  const summary = props.summary;
  const items = props.items;
  return (
    <div className={`alternateHomeServices ${items.length == 3 ? "three" : "two"}`}>
      <div className="title">
        <h2> {title}</h2>
        <h4>{summary}</h4>
      </div>
      <div className="items">
        {items.map((item, i) => {
          return (
            <div className="item" key={i} style={{backgroundImage: `url(../assets/images/${item.picture})`}}>
              <h4>
                {item.text}
              </h4>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default HomeServices;
