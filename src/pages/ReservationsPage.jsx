import { useEffect } from "react"
import useCrud from "../hooks/useCrud"
import HeaderShared from "../components/shared/HeaderShared"
import ReserveCard from "../components/ReservationsPage/ReserveCard"

const ReservationsPage = () => {

    const [reservations, getReservations] = useCrud()

    useEffect(() => {

        getReservations('/bookings')

    }, [])

    console.log(reservations)



    return (
        <div>
            <h2>Reservations</h2>
            {
                reservations?.map(reserve=>(
                    <ReserveCard
                    key={reserve.id}
                    reserve={reserve}
                    />

                ))

            }
        </div>
    )
}

export default ReservationsPage