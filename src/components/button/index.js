import React from 'react';

const Button = (props) => {
  const {
    label,
    onClick,
    width,
    height,
    type = 'button',
  } = props;

  return (
    <button
      className={`flex flex-row items-center content-center w-[30%] m-auto mt-8 justify-center transition z-20 ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 bg-secondary  text-paragraph100 rounded-[15px] ${width} ${height}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;