import React from 'react'
import { useForm } from 'react-hook-form'
import './styles/FilterPrice.css'

const FilterPrice = ({setFromTo,setCountryFil,setnameInput}) => {


    const{handleSubmit,register,reset}=useForm()

    const submit=data=>{
        console.log(data.from);
        console.log(data.to);
        const obj={
            from: data.from===0 || data.from===undefined ? 0 :data.from,
            to: data.to ===0 || data.to ===undefined? 9999:data.to
        }
        setFromTo(obj)
        setnameInput('')
        setCountryFil('all countries')
    }

    


    return (
        <section className='filter__price__container'>
            <h3 className='title__filter'>Price</h3>
            <form className='filter__price__form' onSubmit={handleSubmit(submit)}>
                <label className='fromto__field'>
                    <span className='filter__label__fromto'>From</span>
                    <input className='filter__input__fromto' {...register('from')} type="number" />
                </label>
                <label className='fromto__field'>
                    <span className='filter__label__fromto'>To</span>
                    <input className='filter__input__fromto' {...register('to')}type="number" />
                </label>
                <button className='filter__price__btn'>Apply</button>
            </form>

        </section>
    )
}

export default FilterPrice