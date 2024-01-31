import React, { useEffect } from 'react'
import useFetch from '../../hooks/useFetch'
import './styles/FilterCountry.css'

const FilterCountry = ({setCountryFil,setCountryId,setnameInput,setFromTo}) => {

    let url = 'https://hotels-api.academlo.tech/cities'
    const [cities, getCities] = useFetch(url)

    useEffect(() => {
        getCities()
    }, [])
    



    
    const countries= []
        
        for (let i =0; i<cities?.length;i++){
            if (!countries.includes(cities[i].country)){
                countries.push({
                    'name':cities[i].country,
                    'countryId':cities[i].countryId,
                })
            }
        }
                

        const handleFilteredCountries =(country)=>{


            if(country=='all countries'){
                setCountryId('allC')
                setCountryFil('all countries')
                

    
            }else{
                setCountryId(country.countryId)
                setCountryFil(country.name)
           
            } 
            setnameInput('')
            setFromTo({
                from:0,
                to:9999
            })       
        }
        
    



  return (
    <section className='filter__country__container'>
        <h3 className='filter__country__title' >Countries</h3>
            <ul className='filter__country__list'>
                <li className='filter__country__item'  onClick={()=>handleFilteredCountries('all countries')}> All Countries</li>
                {
                    countries.map(country => (
                        <li className='filter__country__item' onClick={()=>handleFilteredCountries(country)} key={country.countryId}>
                            {country.name}
                        </li>
                    ))
                }
            </ul>
    </section>
  )
}

export default FilterCountry