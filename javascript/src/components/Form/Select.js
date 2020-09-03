import React,{ useRef, useEffect } from 'react';
import { useField } from '@unform/core';


function Form({ name, label, options, ...rest }) {
  const selectRef = useRef(null)
  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if(!ref.state.value) return 'not values'

        return ref.state.value.value
      }
    })
  },[fieldName, registerField])
  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <select id={fieldName} ref={selectRef} defaultValue={defaultValue}>
        {options.map(option => (
          <option key={option.id} value={option.value}>{option.label}</option>
        ))}
      </select>

      {error && <span>{error}</span>}
    </>
  );
}

export default Form;