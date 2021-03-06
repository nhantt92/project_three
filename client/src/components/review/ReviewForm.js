import React, { Component } from 'react';
import axios from 'axios'

import styled from 'styled-components'

const ReviewFormContainer = styled.div`
font-family: "Nunito", sans-serif;
`

const PostButton = styled.button`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 5%;
text-align: center;
background-color: rgba(250, 233, 186, 0.2);
//margin: 20px auto;
padding: 6px;
text-decoration: none;
a {
    text-decoration: none;
    color: black;
}`

class ReviewForm extends Component {
    state = {
        // showReviewForm: true,
        newReview: {
            title: '',
            description: ''
        }, 
        redirectToPiePage: false,
        newReviewId: ''
    }

    handleChange = (event) => {

        const attribute = event.target.name
        const updatedReview = {...this.state.newReview}

        updatedReview[attribute] = event.target.value
        this.setState({newReview: updatedReview})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const pieId = this.props.pieId
        const emptyForm = {
            title: '',
            description: ''
        }
        const res = await axios.post(`/api/shops/pies/${pieId}/reviews`, {
            review: this.state.newReview
        })
        this.setState({redirectToPiePage: true, newReviewId: res.data._id, newReview: emptyForm})
        this.props.reloadPie();
        console.log(res)
    }


render() {
    
    
    // if (this.state.redirectorToPiePage) {
    //     const { pieId } = this.props.pieId
    //     return <Redirect to = {`/api/shops/pies/${pieId}`} />
    // }
return (
    <div>
    <ReviewFormContainer>

        <form onSubmit={this.handleSubmit}>
            <div>
                {/* <label htmlFor="title">title </label> */}
                <input onChange={this.handleChange} placeholder="title" name="title" type="text" value={this.state.newReview.title} />
            </div>
            <div>
                {/* <label htmlFor="description">your thoughts...</label> */}
                <input onChange={this.handleChange} placeholder="my thoughts..."name="description" type="text" value={this.state.newReview.description} />
                
            </div>
            <br />
            <PostButton>post</PostButton>
            
     
        </form>
    </ReviewFormContainer>
    </div>
);
}
}

export default ReviewForm;