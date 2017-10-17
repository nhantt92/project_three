import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReviewPage from '../review/ReviewPage'
// import ReviewList from '../review/ReviewList'
import ReviewForm from '../review/ReviewForm'

const Title = styled.div`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px
`
const PieDescriptionStyle = styled.div`
text-align: center;
font-family: "Lobster Two", sans-serif;
`
const ImageStyle = styled.div`
align: center;
img {
max-height: 300px
}
`

class Pie extends Component {
    state={
        pie: {
            flavor: '',
            price: '',
            description: '',
            image:'',
            reviews: []
        }
    }

    // call to get one pie
    componentWillMount() {
        this.getOnePie()
    }

    // Use axios to get specific pie
    getOnePie = async () => {
        try {
            const { pieId } = this.props.match.params
            const res = await axios.get(`/api/shops/pies/${pieId}`)
            // this.setState({shop: res.data[0]})
            this.setState({pie: res.data})
            // console.log(res.data)
        } catch(err) {
            console.log("error")
        }
    }


// WRITE a REVIEW 
// Post route to create a new and empty review
    createNewReview = async () => {
        // const newReview = [...this.state.review]
        const { pieId } = this.props.match.params
        const res = await axios.post(`/api/shops/pies/${pieId}/reviews`)
        // console.log(res.data)
        // we're sending "saving" the pie back...
        this.setState({pie: res.data})
    }

    // CREATE DELETE for Review
    // Create an OnClick that deletes a review
    deleteReview = async (reviewId) => {
        const { pieId } = this.props.match.params
        const id = reviewId
        const res = await axios.delete(`/api/shops/pies/${pieId}/reviews/${id}`)
        this.setState({pie: res.data})
        console.log(res.data)
    }

    // Create a Patch for review
    // Add onChange listener for title and description

    // handleChange = (event, reviewId) => {
    //     const attribute = event.target.name
    //     const  { pieId } = this.props.match.params
    // }
    

    render() {
        return (
            <div>
                <Title>
                    <h2> {this.state.pie.flavor} pie</h2>
               </Title>
               <ImageStyle>
                  <img src= {this.state.pie.image} />
               </ImageStyle>
                <PieDescriptionStyle>
                    {this.state.pie.description}
                    <p>$ {this.state.pie.price}</p>  
                </PieDescriptionStyle>



                {this.state.pie.reviews.map((review) => {
                    return (
                        <div>
                        <span key={review._id}></span>
                        <h4>{review.title}</h4>
                        <p>{review.description}</p>
                        <button onClick={() => this.deleteReview(review._id)}>delete review</button>
                        </div>    
                    )
                })} 
            <button onClick={this.createNewReview}>Write review</button>
                

                <Link to="/pies">return to pies</Link>
                <ReviewForm reloadPie={this.getOnePie} pieId={this.state.pie._id} />
                {/* <ReviewList review={this.state.pies.reviews}  deleteReview= {this.deleteReview} /> */}
            </div>
        );
    }
}

export default Pie;