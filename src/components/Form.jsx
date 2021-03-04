import React, { useState } from 'react';

const Form = ({ onSubmit, placeholder = '', buttonText = '' }) => {
  const [value, setValue] = useState('');

  const submit = (event) => {
    event.preventDefault();
    const trimmedValue = value.trim();
    if (trimmedValue !== '') {
      onSubmit(trimmedValue);
      setValue('');
    }
  };
  return (
    <form onSubmit={submit}>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
      />
      <button type="submit">{buttonText}</button>
    </form>
  );
};

export default Form;
