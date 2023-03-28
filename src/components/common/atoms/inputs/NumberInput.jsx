import React from 'react';

const NumberInput = ({ containerClass, inputName, inputPlaceholder, inputValue, inputLabel, handleChangeCb }) => 
  <div className={containerClass}>
    <label>{inputLabel}</label>
    <input
      type='number'
      name={inputName}
      placeholder={inputPlaceholder}
      value={inputValue}
      onChange={handleChangeCb}
    />
  </div>

export default NumberInput;
