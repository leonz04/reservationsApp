import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/HeaderShared.css'
import useAuth from '../../hooks/useAuth'
import { useDispatch, useSelector } from 'react-redux'
import { setRolG } from "../../store/states/rol.state"


const HeaderShared = ({}) => { 

  const[menuMobile, setMenuMobile]=useState(false)
  
  const dispatch= useDispatch();
  const rol = useSelector(states => states.rol)


  const { login } = useAuth();
  useEffect(() => {
    if(localStorage.getItem('token')){
      const { rol } = JSON.parse(localStorage.getItem('user'))
       dispatch(setRolG(rol))
    }
  }, [])



  const navigate=useNavigate()

  useEffect(() => {
        login
        rol
  }, [navigate])
  

  const handleMenuMobile = () =>{
    setMenuMobile(!menuMobile)
  }

  
  


  return (
    <header className='header'>
      <h1 className='header__logo'><Link to="/">ReservationsApp</Link></h1>
      <div className='mobile__menu'>
        <i onClick={handleMenuMobile} className='bx bx-menu' ></i>
      <nav className='header__nav'>
        <ul className={`header__nav__list ${menuMobile?'openMenu':''}`}>
        <li className='header__nav__item'><Link to="/">Home</Link></li>
          {
            
            login&&<li className={`header__nav__item`}>  <Link className={`${!login ? 'dissapear':''}`} to="/reservations">Reservations</Link></li>
          }
          {
            !login&&<li className='header__nav__item'><Link to="/register">Register</Link></li>
          }
          {
            login?<li className='header__nav__item'><Link to="/login">Profile</Link></li>:<li className='header__nav__item'><Link to="/login">Login</Link></li>
          }
          {
            rol==='admin'?<li className='header__nav__item'><Link to="/admin">admin</Link></li>:''
          }

        </ul>
      </nav>
      </div>
    </header>
  )
}

export default HeaderShared