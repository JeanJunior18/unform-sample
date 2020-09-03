import React from 'react';
import './App.css';
import { Form } from '@unform/web'
import Input from './components/Form/Input';
import Select from './components/Form/Select';


function App() {

  const options = [
    {id:1, label:'Junior Dev', value: '0'},
    {id:2, label:'Pleno Dev', value: '1'},
    {id:3, label:'Senior Dev', value: '2'}
  ]

  const initialData = {
    name: 'Jean Junior',
    xp:1
  }

  return (
    <div className="App">
      <Form initialData={initialData} className="App-header" onSubmit={console.log}>
          <Input name='name' label="Nome" />

          <Select name='xp' options={options} label="Experiência" /> 

          <button type='submit'>Enviar</button>
      </Form>
    </div>
    );
}

export default App;
