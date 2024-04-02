import React, { useEffect } from 'react'
import useCrud from '../../hooks/useCrud'
import Rating from '@mui/material/Rating';


const CommentsSection = ({hotelId}) => {

    const [reviews, getReviews]=useCrud()

    useEffect(()=>{
        if(hotelId){
            getReviews(`/reviews?hotelId?=${hotelId}` )

        }
    },[hotelId])
    console.log(reviews);
  return (
    <div>
        <div>
            {
                reviews?.results.filter(hotelReview=> hotelReview.hotel.id === hotelId ).map(reviewInfo=>(
                    <div>
                        <div><Rating name="half-rating-read" defaultValue={reviewInfo.rating}precision={0.5} readOnly /></div>
                        <p key={reviewInfo.id}>{reviewInfo.comment}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CommentsSection