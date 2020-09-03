import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';


function Input({ name, label }) {
  const inputRef = useRef(null)
  const { fieldName, registerField, defaultValue} = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  },[fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{label}</label>}

      <input ref={inputRef} defaultValue={defaultValue} />
    </>
  );
}

export default Input;