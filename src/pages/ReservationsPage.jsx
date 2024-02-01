import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"
import './styles/ReservationsPage.css'

const ReservationsPage = () => {

    const [openModal, setOpenModal] = useState(true)

    const [reserveSelected, setReserveSelected] = useState()

    const [reservations, getReservations, , deleteReservation] = useCrud()

    useEffect(() => {

        getReservations('/bookings')

    }, [])

    console.log(reservations)



    return (
        <div className='reservations__page' >
            <h2>Reservations</h2>
            <div className={`modal__review ${openModal?'modal__close':''}`}>
                <FormReviews
                    reserveSelected={reserveSelected}
                    setReserveSelected={setReserveSelected}
                    setOpenModal={setOpenModal}
                />
            </div>
            {
                reservations?.map(reserve => (
                    <ReserveCard
                        key={reserve.id}
                        reserve={reserve}
                        deleteReservation={deleteReservation}
                        setReserveSelected={setReserveSelected}
                        setOpenModal={setOpenModal}
                    />

                ))

            }
        </div>
    )
}

export default ReservationsPage