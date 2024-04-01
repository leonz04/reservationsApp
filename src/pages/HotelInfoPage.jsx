import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch'
import { Map, Marker, ZoomControl } from "pigeon-maps"
import './styles/HotelInfoPage.css'
import OtherHotels from '../components/HotelInfoPage/OtherHotels'
import ReservationHotel from '../components/HotelInfoPage/ReservationHotel'
import SliderImgs from '../components/HotelInfoPage/SliderImgs'
import CommentsSection from '../components/HotelInfoPage/CommentsSection'
import Rating from '@mui/material/Rating';



const HotelInfoPage = () => {

    const { id } = useParams()

    const url = `https://reservationapp-backend-padz.onrender.com/hotels/${id}`

    const [hotel, gethotel] = useFetch(url)

    useEffect(() => {

        gethotel()

    }, [url])

    console.log(hotel?.rating)

    return (
        <div className='container__hotel__info'>
            <header className='header__hotel__page'>
                <h2 className='header__hotel__title'>{hotel?.name}</h2>
                <h3 className='raiting'>Rating<Rating name="half-rating-read" defaultValue={hotel?.rating} precision={0.5} readOnly /></h3>
            </header>

            <div className='container__img__map'>
                <div className='slider__column'>
                <SliderImgs hotel={hotel} />
                <h3>Servicios Incluidos</h3>
                </div>
                <div className='info__description__hotel'>
                    <div className='reservation__map'>
                        {
                            localStorage.getItem('token')&&
                            <ReservationHotel
                                hotelId={hotel?.id}
    
                            />

                        }
                        <div className='hotel__map'>
                            {
                                hotel && (

                                    <Map defaultCenter={[+hotel?.lat, +hotel?.lon]} width={200} height={200} zoom={17} >
                                        <ZoomControl />
                                        <Marker
                                            width={100}
                                            anchor={[+hotel?.lat, +hotel?.lon]}
                                            color='#34a356'
                                        />

                                    </Map>

                                )}
                        </div>

                    </div>
                    <div className='general__info'>
                        <h3 className='info__city__name'>{hotel?.city.name}, {hotel?.city.country}</h3>

                        <div className='info__location'>
                            <i className='bx bx-map'></i>
                            <span>{hotel?.address}</span>
                        </div>
                        <p className='info__description'>{hotel?.description}</p>
                    </div>
                </div>

            </div>
            <CommentsSection
                hotelId={hotel?.id}

            />


            <OtherHotels
                cityId={+hotel?.city.id}
                hotelId={hotel?.id}
            />
        </div>
    )
}

export default HotelInfoPage