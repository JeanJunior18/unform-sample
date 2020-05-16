import React from 'react';
import { Form } from '@unform/web'
import Input from './components/Form/Input';
import Select from './components/Form/Select';

function Login() {

  function handleSubmit(data){
    console.log(data)
  }

  const options = [
    {value: 'PI', label: 'Piauí'},
    {value: 'MA', label: 'Maranhão'},
  ]

  return (
    <Form onSubmit={handleSubmit}>
        <Input name='email' />

        <Select name='Estado' options={options} /> 

        <button type='submit'>Enviar</button>
    </Form>
    );
}

export default Login;