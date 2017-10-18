import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReviewPage from '../review/ReviewPage'
// import ReviewList from '../review/ReviewList'
import ReviewForm from '../review/ReviewForm'

const Title = styled.div`
// margin: -1;
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px
`
const PieDescriptionStyle = styled.div`
text-align: center;
font-family: "Lobster Two", sans-serif;
max-width: 300px;
`

const ImageStyle = styled.div`
text-align : center;
img {
max-width: 400px;
}
// max-height: 200px;
// margin: 0 auto;
`

const ReviewBlock = styled.div`
  text-align: left;
`

const Container = styled.div`
border-radius: 1px;
width: 95vw;
max-width: 1000px;
margin: 20px auto;
border: 1px solid #e6e6e6;
`

class Pie extends Component {
    state = {
        pie: {
            flavor: '',
            price: '',
            description: '',
            image: '',
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
            this.setState({ pie: res.data })
            // console.log(res.data)
        } catch (err) {
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
        this.setState({ pie: res.data })
    }
    // CREATE DELETE for Review
    // Create an OnClick that deletes a review
    deleteReview = async (reviewId) => {
        const { pieId } = this.props.match.params
        const id = reviewId
        const res = await axios.delete(`/api/shops/pies/${pieId}/reviews/${id}`)
        this.setState({ pie: res.data })
        console.log(res.data)
    }
    render() {
        return (
            <Container>
                <Title>
                    <h2> {this.state.pie.flavor} pie</h2>
                </Title>
                <ImageStyle>
                    <img src={this.state.pie.image} />
                </ImageStyle>
                <PieDescriptionStyle>
                    <p>{this.state.pie.description}</p>
                    <p>$ {this.state.pie.price}</p>
                </PieDescriptionStyle>


                <ReviewBlock>
                    {this.state.pie.reviews.map((review) => {
                        return (
                            <div>
                                <span key={review._id}></span>
                                <h5>{review.title}</h5>
                                <p>{review.description}</p>
                                <button onClick={() => this.deleteReview(review._id)}>delete review</button>
                            </div>
                        )
                    })}
                </ReviewBlock>
                {/* <button onClick={this.createNewReview}>Write review</button> */}


                <Link to="/pies">return to pies</Link>
                <ReviewForm reloadPie={this.getOnePie} pieId={this.state.pie._id} />
                {/* <ReviewList review={this.state.pies.reviews}  deleteReview= {this.deleteReview} /> */}
            </Container>
        );
    }
}

export default Pie;