import React from 'react'
import { Link } from 'react-router-dom'
import './styles/HeaderShared.css'

const HeaderShared = () => {
  return (
    <header className='header'>
        <h1 className='header__logo'><Link to="/">ReservationsApp</Link></h1>
        <nav className='header__nav'>
            <ul className='header__nav__list'>
            <li className='header__nav__item'><Link to="/reservations">Reservations</Link></li>
                <li className='header__nav__item'><Link to="/register">Register</Link></li>
                <li className='header__nav__item'><Link to="/login">Login</Link></li>

            </ul>
        </nav>
    </header>
  )
}

export default HeaderShared