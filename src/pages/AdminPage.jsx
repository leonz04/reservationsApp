import React, { useEffect, useState } from 'react'
import useCrud from '../hooks/useCrud'
import { useForm } from 'react-hook-form'
import useFetch from '../hooks/useFetch'
// import UploadImage from '../components/AdminPage/UploadImage'


const AdminPage = () => {

  const urlCities='http://localhost:8080/cities'
  const [,,createHotel]=useCrud() 
  const [,,createImage]=useCrud() 
  const {handleSubmit, register, reset}=useForm()
  const [cities,getCities]=useFetch(urlCities)
  const [openModal, setOpenModal] = useState(false)

  useEffect(()=>{
    getCities()

},[])
  
console.log(cities)


  const submit= data=>{

    const obj ={
      ...data,
  }
    

    createHotel('/hotels',obj)

    reset({
      name:"",
      description:"",
      price:"",
      lat:0,
      lon:0,
    })

  }


  return (
    <div className='container__form__hotel'>
      <form className='register__form' onSubmit={handleSubmit(submit)}>
      {/* <div className={`modal__review ${openModal?'modal__close':''}`}>
                <UploadImage
                    
                />
      </div> */}
        <article className='register__form__field'>
          <label className='register__form__label'>Name</label>
          <input className='register__form__input' {...register('name')}type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Description</label>
          <input className='register__form__input' {...register('description')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Address</label>
          <input className='register__form__input' {...register('address')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Price</label>
          <input className='register__form__input' {...register('price')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Latitude</label>
          <input className='register__form__input' {...register('lat')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Longitude</label>
          <input className='register__form__input' {...register('lon')} type="text" />
        </article>
        <article className='register__form__field'>
          <label className='register__form__label'>Longitude</label>
          <select className='register__form__input' {...register('cityId')}>
            <option className="type__select__options" value=''>Select City</option>
            {
            cities?.map(city=>(
                <option className="type__select__options"  key={city.name} value={city.id}>{city.name}</option>

            ) )

            }       
          </select>
        </article>
        <button className='register__form__btn'>Submit</button>
      </form>


    </div>
  )
}

export default AdminPage