import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { Link, useNavigate } from "react-router-dom"
import './styles/LoginPage.css'
import { useDispatch } from "react-redux"
import { useState } from "react"


const LoginPage = () => {
  window.location.replace

  const {handleSubmit, reset,register}=useForm()

  const navigate=useNavigate()

  const {loginUser,logout} =useAuth() 
  const dispatch = useDispatch()

  const [ error, setError ] = useState(false);




  const submit=(data,e)=>{
    
    loginUser(data)
      .then(() => {
        reset({
          email:"",
          password:"",
        })

      })
      .catch(err => {
        setError(true);
      })
  }
  const handleLogout = () => {
    logout();  
    navigate('/login')    

  } 

  if(localStorage.getItem('token')){
    const { firstName, lastName, email, rol } = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="">
        <h2>Welcome {firstName + ' ' + lastName + ' '+ rol}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }else{

  return (
    <div className="loginpage__login">
      <header>
        <img className="loginpage__img" src="/usrimgblack.png" alt="imgusr" />
      </header>
      <form className="loginpage__form" onSubmit={handleSubmit(submit)}>
        <h2 className="loginpage__form__title">User</h2>
        <article className="loginpage__form__item">
          <label className="loginpage__form__label">Email</label>
          <input className="loginpage__form__input" {...register('email')}type="email" />
        </article>
        <label className="loginpage__form__item">
          <label className="loginpage__form__label">Password</label>
          <input className="loginpage__form__input" {...register('password')} type="password" />
        </label>
        <button className="loginpage__form__btn">Submit</button>
      </form>
      <p>{error?"incorrect credencial":""}</p>
      <Link to="/reset_password">Recover Password</Link>
      
    </div>
  )
}
}

export default LoginPage