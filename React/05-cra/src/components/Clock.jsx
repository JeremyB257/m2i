import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log('ici');
  }, []);

  return (
    <>
      <h1>clock</h1>
      <h1 onClick={() => setDate(new Date())}>{date.toLocaleTimeString()}</h1>
    </>
  );
};

export default Clock;
