import React, { useRef } from 'react'
import './styles/FilterName.css'

const FilterName = ({setnameInput,setCountryFil,setCountryId,setFromTo}) => {
    
    const inputSearch = useRef()

    const handleSearch=e=>{
        e.preventDefault()
       
        setnameInput(inputSearch.current.value.trim().toLowerCase())
        setCountryFil("all countries")
        setCountryId("  ")
        setFromTo({from:0, to:9999})
        console.log(inputSearch.current.value);
        inputSearch.current.value=''
    }

  
  return (

    
    <form className='filter__name' onSubmit={handleSearch}>
        <input className='filter__name__input'  ref={inputSearch}type='text'/>
        <button className='filter__name__btn'>search</button>
    </form>
  )
}



export default FilterName