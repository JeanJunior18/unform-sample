import React,{ useRef, useEffect } from 'react';
import ReactSelect, {} from 'react-select';
import {useField} from '@unform/core';


function Form({ name, ...rest }) {
  const selectRef = useRef(null)
  const { fieldName, registerField } = useField(name);

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
    <ReactSelect ref={selectRef} classNamePrefix='react-select' {...rest} />
  );
}

export default Form;