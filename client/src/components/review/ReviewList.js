import React from 'react'
import styled from 'styled-components'
// import Review from './Review'


// This is a simple stateless component that just loops through an array of props and renders another component
// Remember to pass props in as an argument when you use stateless functions.


const ReviewList = (props) => {
return (
    <div>
    {props.reviews.map((review) => {
        return (
            <div>
            <span key={review._id}></span>
            <h4>{review.title}</h4>
            <p>{review.description}</p>
            <button onClick={() => this.deleteReview(review._id)}>delete review</button>

            </div>    
        )
    })}
    </div>
)

}

export default ReviewList