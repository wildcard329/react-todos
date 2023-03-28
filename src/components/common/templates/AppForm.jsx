import React from 'react';
import { NumberInput, TextInput, TextAreaInput } from '../atoms/inputs';
import { AppSubmitButton } from '../atoms/buttons';

const AppForm = ({ handleSubmitCb, formClass, inputOptions }) => 
  <form className={formClass} onSubmit={handleSubmitCb}>
    {inputOptions?.map((option) => {
      const { type, label, name, value, placeholder, inputClass, handleChangeCb, id } = option;
      switch (type) {
        case 'text':
          return <TextInput key={id} containerClass={inputClass} inputLabel={label} inputName={name} inputValue={value} inputPlaceholder={placeholder} handleChangeCb={handleChangeCb} />  
        case 'textarea':
          return <TextAreaInput key={id} containerClass={inputClass} inputLabel={label} inputName={name} inputValue={value} inputPlaceholder={placeholder} handleChangeCb={handleChangeCb} />  
        case 'number':
          return <NumberInput key={id} containerClass={inputClass} inputLabel={label} inputName={name} inputValue={value} inputPlaceholder={placeholder} handleChangeCb={handleChangeCb} />
        default: return null;
      };
    })}
    <AppSubmitButton />
  </form>

export default AppForm;
