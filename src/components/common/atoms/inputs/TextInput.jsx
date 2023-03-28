import React from 'react';

const TextInput = ({ containerClass, inputName, inputPlaceholder, inputValue, inputLabel, handleChangeCb }) => 
  <div className={containerClass}>
    <label>{inputLabel}</label>
    <input
      type='text'
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={handleChangeCb}
    />
  </div>

export default TextInput;
