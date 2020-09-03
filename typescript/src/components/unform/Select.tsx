import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

interface Options {
  id: number
  label: string
  value: any
}

interface Props {
  name: string
  options: Options[]
  label?: string
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const Input: React.FC<InputProps> = ({ name, label, options, ...rest }) => {

  const selectRef = useRef<HTMLSelectElement>(null);

  const { fieldName, registerField, defaultValue, error } = useField(name);

  useEffect(()=>{
    registerField({
      name: fieldName,
      path: 'value',
      ref: selectRef.current,
    })
  },[fieldName, registerField])

  return (
    <>
      {label && <label htmlFor={fieldName}>{name}</label>}

      <select id={fieldName} ref={selectRef} defaultValue={defaultValue}>
        {options.map(option => (
          <option key={option.id} value={option.value}>{option.label}</option>
        ))}
        
      </select>

      {error && <span>{error}</span>}
    </>
  );
}

export default Input;