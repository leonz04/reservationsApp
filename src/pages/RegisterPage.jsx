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
      <h2 className='register__title'>Register</h2>
      <form className='register__form' onSubmit={handleSubmit(submit)}>
        <article className='register__form__field'>
          <label className='register__form__label'> First Name</label>
          <input className='register__form__input' {...register('firstName')}type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Last Name</label>
          <input className='register__form__input' {...register('lastName')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Email</label>
          <input className='register__form__input' {...register('email')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Password</label>
          <input className='register__form__input' {...register('password')} type="password" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Gender</label>
          <select className='register__form__input' {...register('gender')}>
            <option value="male">male</option>
            <option value="female">female</option>          
            <option value="othe">other</option>          
          </select>
        </article>
        <button className='register__form__btn'>Submit</button>
      </form>
    </div>
  )
}

export default RegisterPage