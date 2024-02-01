import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'
import './styles/ReservationHotel.css'

const ReservationHotel = ({hotelId}) => {

  
  const {handleSubmit,register,reset}=useForm()

  const [,,createReservation]=useCrud()

  const submit = data=>{
    data.hotelId=hotelId
    createReservation('/bookings', data)


  }

  return (
    <div className='reservation'>
        <h3 className='reservation__title'>Reservations</h3>
        <form className='reservation__form' onSubmit={handleSubmit(submit)}>
        <label className='reservation__inout__container'>
          <span className='reservation__form__label'>Check-in</span>
          <input className='reservation__form__input' {...register('checkIn')}type="date" />
        </label>
        <label className='reservation__inout__container'>
          <span className='reservation__form__label'>Check-out</span>
          <input className='reservation__form__input' {...register('checkOut')}type="date" />
        </label>
        <button className='reservation__btn'>Submit</button>
      </form>
    </div>
  )
}

export default ReservationHotel