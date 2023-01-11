import { useState } from 'react';
import Button from './components/Button';
import Clock from './components/Clock';
import CounterA from './components/CounterA';
import CounterB from './components/CounterB';
import Hook1 from './exercice/Hook1';
import Hook2 from './exercice/Hook2';

const App = () => {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <h1>app</h1>
      <Button />
      <CounterA default={12} />
      <CounterB default={12} />
      <button onClick={() => setDisplay(!display)}>afficher/cacher</button>
      {display && <Clock />}
      <Hook1 />
      <Hook2 />
    </>
  );
};

export default App;
