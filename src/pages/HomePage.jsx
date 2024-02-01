import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getHotelsThunk } from '../store/states/hotels.state'
import ListHotels from '../components/HomePage/ListHotels'
import FilterName from '../components/HomePage/FilterName'
import FilterPrice from '../components/HomePage/FilterPrice'
import FilterCities from '../components/HomePage/FilterCities'
import FilterCountry from '../components/HomePage/FilterCountry'
import './styles/HomePage.css'

const HomePage = () => {


  const [nameInput, setnameInput] = useState('')
  const [fromTo, setFromTo] = useState({
    from: 0,
    to: 9999
  })
  const [citySelected, setCitySelected] = useState('')
  const [countryFil, setCountryFil] = useState('all countries')


  const [countryId, setCountryId] = useState()
  const [openFilters, setOpenFilters] = useState(false)





  const dispatch = useDispatch()

  const hotels = useSelector(states => states.hotels)

  useEffect(() => {
    const url = 'https://hotels-api.academlo.tech/hotels'
    dispatch(getHotelsThunk(url))


  }, [])




 

  const hotelsFiltered = hotels?.results.filter(hotelInfo => {
    // Filter Name
    const filterName = hotelInfo.name.toLowerCase().includes(nameInput)
    //Filter price
    const priceHotel = Number(hotelInfo.price)

    const filterPrice = priceHotel >= fromTo.from && priceHotel <= fromTo.to
    

    //filter cities
    //se hicieron con el backend

    const filterCountry = countryFil==="all countries" ? true : countryId=="allC" ? true : hotelInfo.city.countryId==countryId  ;


    return filterCountry  && filterPrice && filterName  
  })

  const handleFilters=()=>{
    setOpenFilters(!openFilters)
  }





  return (
    <div className='homepage'>
      <i onClick={handleFilters} class='bx bxs-filter-alt' ></i>
      <section className={`section__filters  ${openFilters?'openMenu':''}`}>
        <h2>Filters</h2>
      
      <FilterPrice 
      setFromTo={setFromTo}
      setCountryFil={setCountryFil}
      setnameInput={setnameInput}


      />

      <FilterCountry 
      setCountryFil={setCountryFil}
      setCountryId={setCountryId}
      setnameInput={setnameInput}
      setFromTo={setFromTo}
      
 />
      <FilterCities 
      setCitySelected={setCitySelected}
       setCountryFil={ setCountryFil}
       countryId={countryId}
       setCountryId={setCountryId}
       setnameInput={setnameInput}
       setFromTo={setFromTo}
      />
      </section>
    <div className='homepage__hotels__container'>
      <FilterName
        setnameInput={setnameInput}
        setCountryFil={setCountryFil}
        setCountryId={setCountryId}
        setFromTo={setFromTo}
      />

      <ListHotels 
        hotelsFilter={hotelsFiltered}
        citySelected={citySelected}
        
        />
        </div>
    </div>
  )
}

export default HomePage