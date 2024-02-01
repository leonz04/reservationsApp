import React from 'react'
import { useForm } from 'react-hook-form'
import useCrud from '../../hooks/useCrud';
import './styles/FormReviews.css'

const FormReviews = ({reserveSelected,setReserveSelected,setOpenModal}) => {

    console.log(reserveSelected);

    const {handleSubmit, register, reset}=useForm()

    const [,,createReview]=useCrud() 

    const submit=data=>{

        const obj ={
            ...data,
            hotelId: reserveSelected?.hotelId,
            raiting: +data.raiting

        }
        createReview('/reviews',obj)
        reset({
            raiting:'5',
            Comment:''

        })
        setReserveSelected()
        setOpenModal(true)

    }

    const handleModal =()=>{
        setOpenModal(true)


    }

  return (
    <div className='container__form__review'>
        <div onClick={handleModal}>X</div>
        <form onSubmit={handleSubmit(submit)}>
            <h3>Form Reviews</h3>
            <label>
                <span>Raiting</span>
                <select {...register('rating')}>
                    <option value={5}>⭐⭐⭐⭐⭐</option>
                    <option value={4}>⭐⭐⭐⭐</option>
                    <option value={3}>⭐⭐⭐</option>
                    <option value={2}>⭐⭐</option>
                    <option value={1}>⭐</option>
                </select>
            </label>
            <label>
                <span>Comments</span>
                <textarea {...register('comment')}/>
            </label>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default FormReviews