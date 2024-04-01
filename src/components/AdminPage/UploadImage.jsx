// import React from 'react'
// import { useForm } from 'react-hook-form'

// const UploadImage = () => {
//     const {handleSubmit, register, reset}=useForm()

//     const submit=data=>{
//     }
    

//   return (
//     <div className='container__form__review'>
//         <div >X</div>
//         <form onSubmit={handleSubmit(submit)}>
//             <h3>Form Reviews</h3>
//             <label>
//                 <span>Raiting</span>
//                 <select {...register('rating')}>
//                     <option value={5}>⭐⭐⭐⭐⭐</option>
//                     <option value={4}>⭐⭐⭐⭐</option>
//                     <option value={3}>⭐⭐⭐</option>
//                     <option value={2}>⭐⭐</option>
//                     <option value={1}>⭐</option>
//                 </select>
//             </label>
//             <label>
//                 <span>Comments</span>
//                 <textarea {...register('comment')}/>
//             </label>
//             <button>Submit</button>
//         </form>
//     </div>
//   )
// }

// export default UploadImage