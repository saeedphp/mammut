import { useEffect, useState } from "react";

const CounterBox = ({ limit, title }) => {
  const [count, setCount] = useState(parseInt(-limit / 2000));
  useEffect(() => {
    let countInterval;
    if (count < limit) {
      countInterval = setInterval(() => setCount(count + 1), 5000 / limit);
    }
    return () => {
      clearInterval(countInterval);
    };
  }, [count]);
  return (
    <div className="counterBox">
      <div className="number"> + {count}</div>
      <h4>{title}</h4>
    </div>
  );
};

export default CounterBox;
