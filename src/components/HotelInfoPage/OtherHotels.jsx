import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import HotelCard from '../HomePage/HotelCard'

const OtherHotels = ({cityId,hotelId}) => {

const url =`https://hotels-api.academlo.tech/hotels?cityId=${cityId}`
    const [hotels, getHotels]=useFetch(url)

    useEffect(() => {
        if(cityId){

            getHotels()
        }
    }, [cityId])
    
  return (
    <div>
        <h2>Other Hotels Near</h2>
            <div className='container__list__hotels'>
                {
                   hotels?.results.filter(hotelInfo=> hotelInfo.id !== hotelId ).map(hotelInfo =>(
                    <HotelCard
                    key={hotelInfo.id}
                    hotelInfo={hotelInfo}
                    />
                ))
                }
            </div>
    </div>
  )
}

export default OtherHotels