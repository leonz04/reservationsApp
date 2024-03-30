import React from 'react'
import getDaysFromDates from '../../services/getDaysFromDates'
import './styles/ReserveCard.css'

const ReserveCard = ({reserve,deleteReservation,setReserveSelected,setOpenModal}) => {


    const reservationDays = getDaysFromDates(reserve.checkIn,reserve.checkOut)

    const handleDelete =()=>{

        deleteReservation('/bookings', reserve.id)

    }

    const handleReviews =()=>{
        setReserveSelected(reserve)
        setOpenModal(false)
    }

    console.log(reserve)

  return (
    <article className='reserve__card'>
        <header className='reserve__card__header'>
            <img className='reserve__card__img' src={reserve.hotel.images[0].url}/>
        </header>
        <section className='reserve__data__hotel'>
            <h3 className='data__hotel__name'>{reserve.hotel.name}</h3>
            <div className='data__hotel__location'>{reserve.hotel.city.name}, {reserve.hotel.city.country}</div>
            <div onClick={handleReviews} className='reserve__rating'>Rate and comment this visit...</div>
        </section>
        <section className='reserve__data__price'>
            <div className='data__price__info'><span className='days__info__label'>Reservations Days </span><span className='reserve__total__days'>{reservationDays}</span></div>
            <div className='data__price__info'><span className='price__info__label'>subtotal Price </span><span className='reserve__total__value'>{Number(reserve.hotel.price*reservationDays)}</span></div>

        </section>
        <button className='reserve__delete__btn' onClick={handleDelete}><i class='bx bxs-trash'></i></button>
    </article>
  )
}

export default ReserveCard