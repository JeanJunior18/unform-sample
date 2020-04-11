import React,{ } from 'react';
import './App.css';
import { Form, Select, Input } from '@rocketseat/unform';
// import * as Yup from 'yup'

function App() {

  function handleSubmit(data){
    console.log(data);
  }

  let options = [
    {id: 1, cont:'item1', carro:'1'},
    {id: 2, cont:'item2', carro:'2'},
    {id: 3, cont:'item3', carro:'3'},
    {id: 4, cont:'item4', carro:'4'},
  ];

  options.forEach(i => {i['title'] = i.cont})

  function autocomplete(id){
    var comp = Number(id.target.value)
    var info = options.filter(x => x.id === comp) 
    console.log(info)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Select name='cliente' options={options} key={options} onChange={autocomplete} />
      <Input name='nome'/>
      <button type="submit">Enviar</button>
    </Form>
  );
}

export default App;
