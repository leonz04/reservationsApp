import { useEffect, useState } from "react"
import useCrud from "../hooks/useCrud"
import HeaderShared from "../components/shared/HeaderShared"
import ReserveCard from "../components/ReservationsPage/ReserveCard"
import FormReviews from "../components/ReservationsPage/FormReviews"

const ReservationsPage = () => {

    const [reserveSelected, setReserveSelected] = useState()

    const [reservations, getReservations, , deleteReservation] = useCrud()

    useEffect(() => {

        getReservations('/bookings')

    }, [])

    console.log(reservations)



    return (
        <div>
            <h2>Reservations</h2>
            <FormReviews
            reserveSelected={reserveSelected}
            setReserveSelected={setReserveSelected}
            
            />
            {
                reservations?.map(reserve=>(
                    <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    deleteReservation={deleteReservation}
                    setReserveSelected={setReserveSelected}
                    />

                ))

            }
        </div>
    )
}

export default ReservationsPage