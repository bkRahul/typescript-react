import React, { useEffect, useRef } from 'react';
import './Input.css';

type InputProps = {
  label: string;
  size?: 'small' | 'medium' | 'large';
  onChange: (val: string | undefined) => void;
};

export const Input = ({ label, onChange, size }: InputProps) => {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(ref.current?.value);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        className={`customInput ${size}`}
        type='text'
        ref={ref}
        onChange={onChangeHandler}
      />
    </div>
  );
};
