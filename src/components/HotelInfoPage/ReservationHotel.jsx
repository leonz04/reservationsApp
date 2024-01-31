import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud'

const ReservationHotel = ({hotelId}) => {

  
  const {handleSubmit,register,reset}=useForm()

  const [,,createReservation]=useCrud()

  const submit = data=>{
    data.hotelId=hotelId
    createReservation('/bookings', data)


  }

  return (
    <div>
        <h3>Reservations</h3>
        <form onSubmit={handleSubmit(submit)}>
        <label>
          <span>Check-in</span>
          <input {...register('checkIn')}type="date" />
        </label>
        <label>
          <span>Check-out</span>
          <input {...register('checkOut')}type="date" />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default ReservationHotel