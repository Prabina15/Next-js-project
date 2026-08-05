import React from 'react'

const ReviewOfProductPage = async ({params}) => {
    const{id, reviewId}= await params;
  return (
    <div>Product id : {id}, Review id: {reviewId}</div>
  )
}

export default ReviewOfProductPage