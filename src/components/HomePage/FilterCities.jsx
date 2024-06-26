import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import { getHotelsThunk } from '../../store/states/hotels.state'
import { useDispatch } from 'react-redux'
import './styles/FilterCountry.css'

const FilterCities = ({ setCitySelected, setCountryId,countryId,setnameInput,setCountryFil,setFromTo }) => {

    let urlCities = 'https://reservationapp-backend-padz.onrender.com/cities'
    const [cities, getCities] = useFetch(urlCities)

    useEffect(() => {
        getCities()
    }, [])


    const dispatch = useDispatch()

    

    

    
    useEffect(() => {
        let url = 'https://reservationapp-backend-padz.onrender.com/hotels'

        dispatch(getHotelsThunk(url,setnameInput))

    }, [countryId])




    const handleFilterCities = (id, name) => {
        setFromTo({from:0, to:9999})

        setnameInput('')

        
        setCitySelected(name)
        let url = 'https://reservationapp-backend-padz.onrender.com/hotels'
        if(countryId=='allC'){
            url = 'https://reservationapp-backend-padz.onrender.com/hotels'
            setCountryId('')

        }
        
        else if (name !== 'all cities') {
            url = `https://reservationapp-backend-padz.onrender.com/hotels?cityId=${id}`

        }
        else if(name =='all cities'){
            setCountryId('')
            setCountryFil('all countries')


            url = 'https://reservationapp-backend-padz.onrender.com/hotels'

        }

        dispatch(getHotelsThunk(url))

    }



    return (
        <section className='filter__country__container'>
            <h3  className='filter__country__title'>Cities</h3>
            <ul className='filter__country__list' >
                <li className='filter__country__item' onClick={() => handleFilterCities(0, 'all cities')}> All cities</li>
                {
                    cities?.map(city => (
                        <li className='filter__country__item' onClick={() => handleFilterCities(city.id, city.name)} key={city.id}>
                            {city.name}
                        </li>
                    ))
                }
            </ul>
        </section>
    )
}

export default FilterCities