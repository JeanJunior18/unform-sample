import React,{ useRef, useEffect } from 'react';
import './App.css';
import { Form } from '@unform/web'
import { Scope } from '@unform/core'
import Input, {  } from './components/Form/Input'
import * as Yup from 'yup'

function App() {

  const formRef = useRef(null)

  

  useEffect(()=>{
    setTimeout(()=>{
      formRef.current.setData({
        username: 'jeanjr',
        password: 'root',
        adress: {
          street: 'Rua Altos',
          number: '215',
        },
        education:{
          universidade: 'Faculdade Integral Diferencial',
          curso: 'Sistemas de Informação',
          periodo: 2,
        }
      })
    },1000)
  },[])

  async function handleSubmit(data){

    try{
      const schema = Yup.object().shape({
      username: Yup.string().required('O nome é obrigatório'),
      password: Yup.string().required('A senha é obrigatória'),
      adress: Yup.object().shape({
        street: Yup.string().required('Rua é obrigatório')
      })
    });
    formRef.current.setErrors({})
    await schema.validate(data, { abortEarly: false })

    console.log(data)
    }catch(err){
      const ErrorMessages = {}
      if(err instanceof Yup.ValidationError){
        err.inner.forEach(error=>{
          ErrorMessages[error.path] = error.message;
        })
      }
        formRef.current.setErrors(ErrorMessages)
    }
  }

  return (
    <div className="App">
     
     <Form ref={formRef}  onSubmit={handleSubmit}>
       <Input name="username" />
       <Input name="password" type="password" />
       
       <Input name="adress.street" />
       <Input name="adress.number" />

        <Scope path="education">
          <Input name='universidade' />
          <Input name='curso' />
          <Input name='periodo' />
        </Scope>


       <input type="submit" value="Enviar" />
     </Form>
    </div>
  );
}

export default App;
