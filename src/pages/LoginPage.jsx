import { useForm } from "react-hook-form"
import useAuth from "../hooks/useAuth"
import { useNavigate } from "react-router-dom"
import './styles/LoginPage.css'


const LoginPage = ({}) => {
  window.location.replace

  const {handleSubmit, reset,register}=useForm()

  const navigate=useNavigate()

  const {loginUser,logout} =useAuth() 

  const submit=data=>{
    loginUser(data)
    
    console.log(localStorage.getItem('token'))    
    reset({
      email:"",
      password:"",
    })
  }
  const handleLogout = () => {
    logout();  
    navigate('/login')    

  } 

  if(localStorage.getItem('token')){
    const { firstName, lastName, email } = JSON.parse(localStorage.getItem('user'))
    return (
      <div className="">
        <h2>Welcome {firstName + ' ' + lastName}</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    )
  }else{

  return (
    <div className="loginpage__login">
      <header>
        <img className="loginpage__img" src="/usrimgblack.png" alt="imgusr" / >
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
      
    </div>
  )
}
}
export default LoginPage