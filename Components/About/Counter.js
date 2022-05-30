import CounterBox from "./CounterBox";

const Counter = () => {
  return (
    <div className="counter">
      <div className="title">
        <h2></h2>
      </div>
      <div className="row">
        <div className="col-lg-3 col-md-6 col-12">
          <CounterBox limit={30} title="تجربه ما" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <CounterBox limit={5000} title="كاركنان" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <CounterBox limit={10} title="شعب ما" />
        </div>
        <div className="col-lg-3 col-md-6 col-12">
          <CounterBox limit={100} title="پروژه های انجام شده" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
