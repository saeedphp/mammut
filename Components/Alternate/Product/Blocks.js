const Blocks = (props) => {
  return (
    <div className="blocks">
      <div className="title">
        <h4>دانلود ها</h4>
      </div>
      <div className="row">
        <div className="col-md-6 col-12">
          <div className="cardBlock">
            <a href="#">راهنمای کاربری</a>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <div className="cardBlock">
            <a href={`/assets/documents/${props.catalog}`} download>دانلود کاتالوگ</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blocks;
