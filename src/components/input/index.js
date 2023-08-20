import React from 'react';

const Input = (props) => {
  const {
    label,
    placeholder,
    type,
    defaultValue,
    required = false,
    disabled,
    onChange,
    value,
  } = props;
  return (
    <div className='mb-2'>
      {label && (
        <p className="text-paragraph100 mt-4 mb-2">
          {label}
        </p>
      )}
      <input
        type={type || 'text'}
        className='text-sm p-2 w-full rounded-[10px] focus:outline-0 border-[1px] border-secondary'
        placeholder={placeholder}
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required={required}
        autoComplete="off"
        disabled={disabled}
        value={value}
      ></input>
    </div>
  );
};

export default Input;