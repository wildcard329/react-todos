import React from 'react';

const TextAreaInput = ({ containerClass, inputName, inputPlaceholder, inputValue, inputLabel, handleChangeCb }) => 
  <div className={containerClass}>
    <label>{inputLabel}</label>
    <textarea
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={handleChangeCb}
    />
  </div>

export default TextAreaInput;
