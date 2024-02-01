import React from 'react'
import getDaysFromDates from '../../services/getDaysFromDates'
import './styles/ReserveCard.css'

const ReserveCard = ({reserve,deleteReservation,setReserveSelected}) => {


    const reservationDays = getDaysFromDates(reserve.checkIn,reserve.checkOut)

    const handleDelete =()=>{

        deleteReservation('/bookings', reserve.id)

    }

    const handleReviews =()=>{
        setReserveSelected(reserve)
    }


  return (
    <article>
        <header>
            <img className='reserve__card__img' src={reserve.hotel.images[0].url}/>
        </header>
        <section>
            <h3>{reserve.hotel.name}</h3>
            <div>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
            <div onClick={handleReviews} className='reserve__rating'>Rate and comment this visit...</div>
            <div><span>Reservations Days </span><span>{reservationDays}</span></div>
            <div><span>subtotal Price </span><span>{Number(reserve.hotel.price*reservationDays)}</span></div>
        </section>
        <button onClick={handleDelete}>Delete</button>
    </article>
  )
}

export default ReserveCard