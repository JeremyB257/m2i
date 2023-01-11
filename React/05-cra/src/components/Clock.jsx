import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const Clock = () => {
  const [date, setDate] = useState(new Date());
  const [message, setMessage] = useState('');

  useEffect(() => {
    console.log('componentDidMount et componentDidUpdate');

    let timer = setInterval(() => {
      let date = new Date();
      setDate(date);
      date.getSeconds() % 10 === 0 ? setMessage('Ding Dong') : setMessage('');
    }, 1000);

    return () => {
      console.log('componentwillUnmount');
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <h1>clock</h1>
      <h1 onClick={() => setDate(new Date())}>
        {date.toLocaleTimeString()} {message}
      </h1>
    </>
  );
};

export default Clock;
