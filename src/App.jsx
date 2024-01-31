import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import UnknownPages from './pages/UnknownPages'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import HotelInfoPage from './pages/HotelInfoPage'
import HeaderShared from './components/shared/HeaderShared'
import ReservationsPage from './pages/ReservationsPage'

function App() {
  

  return (
    <div className='app'>
      <HeaderShared/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path='*' element={<UnknownPages/>} />
        <Route path='/hotel/:id' element={<HotelInfoPage/>}/> 
        <Route path='/reservations' element={<ReservationsPage/>}/> 

        


      </Routes>
    </div>
  )
}

export default App
