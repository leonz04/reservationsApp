import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './styles/HeaderShared.css'
import useAuth from '../../hooks/useAuth'

const HeaderShared = ({}) => { 

  const { login } = useAuth();

  console.log(login)

  const navigate=useNavigate()

  useEffect(() => {
        login
  }, [navigate])
  

  
  


  return (
    <header className='header'>
      <h1 className='header__logo'><Link to="/">ReservationsApp</Link></h1>
      <nav className='header__nav'>
        <i class='menumob bx bx-menu'></i>
        <ul className='header__nav__list'>
          {
            
            login&&<li className={`header__nav__item`}>  <Link className={`${!login ? 'dissapear':''}`} to="/reservations">Reservations</Link></li>
          }
          {
            !login&&<li className='header__nav__item'><Link to="/register">Register</Link></li>
          }
          {
            login?<li className='header__nav__item'><Link to="/login">Profile</Link></li>:<li className='header__nav__item'><Link to="/login">Login</Link></li>
          }

        </ul>
      </nav>
    </header>
  )
}

export default HeaderShared