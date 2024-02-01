import React, { useEffect } from 'react'
import useCrud from '../../hooks/useCrud'

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
                reviews?.map(reviewInfo=>(
                    <div>
                        <div>{reviewInfo.raiting}⭐</div>
                        <p key={reviewInfo.id}>{reviewInfo.comment}</p>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default CommentsSection