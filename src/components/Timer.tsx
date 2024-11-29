import React, { useEffect, useState, useRef } from 'react';
import { Button } from './Button/Button';

export const Timer = () => {
  const [timer, setTimer] = useState(false);

  const [count, setCount] = useState(0);

  let ref = useRef<number | null>(null);

  useEffect(() => {
    if (timer) {
      ref.current = window.setInterval(() => {
        setCount(count => count + 1);
      }, 1000);
    } else {
      stopTimer();
    }

    return () => {
      stopTimer();
    };
  }, [timer]);

  const stopTimer = () => {
    if (ref.current) window.clearInterval(ref.current);
  };

  return (
    <div>
      <Button
        btnType='timer'
        btnName={timer ? 'Stop Timer' : 'Start Timer'}
        onClick={() => setTimer(!timer)}
      />
      {count}
    </div>
  );
};
