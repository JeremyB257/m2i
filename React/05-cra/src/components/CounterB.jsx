import { useState } from 'react';

const CounterB = (props) => {
  const [count, setCount] = useState(props.default || 0);

  return (
    <>
      <h1>counter B</h1>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>incrementer</button>
    </>
  );
};

export default CounterB;
