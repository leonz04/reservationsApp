import React from 'react'
import { useForm } from 'react-hook-form'
import useAuth from '../hooks/useAuth'
import './styles/RegisterPage.css'


const RegisterPage = () => {

  const { handleSubmit, reset, register } = useForm()

  const {createNewUser} =useAuth()  

  const submit=data=>{

    createNewUser(data)

    reset({
      firstName:"",
      lastName:"",
      password:"",
      gender:"",
      email:""
    })

  }
  return (
    <div className='registerpage'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit(submit)}>
        <article>
          <label> First Name</label>
          <input {...register('firstName')}type="text" />
        </article>
        <article>
          <label>Last Name</label>
          <input {...register('lastName')} type="text" />
        </article>
        <article>
          <label>Email</label>
          <input {...register('email')} type="text" />
        </article>
        <article>
          <label>Password</label>
          <input {...register('password')} type="password" />
        </article>
        <article>
          <span>Gender</span>
          <select {...register('gender')}>
            <option value="male">male</option>
            <option value="female">female</option>          
            <option value="othe">other</option>          
          </select>
        </article>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage