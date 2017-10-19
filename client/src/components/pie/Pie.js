import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ReviewPage from '../review/ReviewPage'
// import ReviewList from '../review/ReviewList'
import ReviewForm from '../review/ReviewForm'

const Container = styled.div`
text-align: center;
border-radius: 5px;
width: 95vw;
max-width: 1000px;
margin: 20px auto;
border: 1px solid rgba(87, 87, 87, .2);
`

const Title = styled.span`
padding: 20px;
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px
`
const PieDescriptionStyle = styled.div`
display: flex;
flex-direction: column;
// left-margin: 50px;
// right-margin: 15px;
padding: 20px;
left-padding: 30px;
text-align: center;
font-family: "Lobster Two", sans-serif;
//  max-width: 900px;
`
const ImageStyle = styled.div`

text-align : center;
img {
max-width: 400px;
border-radius: 6px;
}
// max-height: 200px;
// margin: 0 auto;
`

const ReviewBlock = styled.div`
  text-align: left;
`

const Button = styled.button`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 5%;
text-align: center;
background-color: rgba(250, 233, 186, 0.637);
//margin: 20px auto;
padding: 6px;
text-decoration: none;
a {
    text-decoration: none;
    color: black;
}`
const ReviewsPosted = styled.div`
font-family: "Nunito", sans-serif;
text-align: center;
`
const HideShowReviewButton = Button.extend`

`

const ReviewTitle = styled.p`
text-align: center;
font-family: "Nunito", sans-serif;
text-decoration: underline;
font-size: 25px;
`

const OneReviewTitle = styled.p`
font-weight: 30px;
`


const DeleteButton = Button.extend`
background-color: rgba(163, 163, 163, 0.637);
padding: 1px;
`

// ==============================================================================

class Pie extends Component {
    state = {
        pie: {
            flavor: '',
            price: '',
            description: '',
            image: '',
            reviews: []
        },
        showReviewForm: false
    }


    // call to get one pie
    componentWillMount() {
        this.getOnePie()
    }

    toggleReviewForm = () => {
        this.setState({ showReviewForm: !this.state.showReviewForm })
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
                    {this.state.pie.flavor} pie
        </Title>
                <ImageStyle>
                    <img src={this.state.pie.image} />
                </ImageStyle>
                <PieDescriptionStyle>
                    {this.state.pie.description}
                    <p>$ {this.state.pie.price}</p>


                </PieDescriptionStyle>
                <Button>
                    <Link to="/pies">return to pies</Link>
                </Button>
             <HideShowReviewButton onClick={this.toggleReviewForm}> {this.state.showReviewForm ? 'hide' : 'write a review'}</HideShowReviewButton>

                <ReviewBlock>

                    <ReviewTitle>reviews</ReviewTitle>


                    {this.state.pie.reviews.map((review) => {
                        return (
                            <ReviewsPosted>
                                <span key={review._id}></span>
                                <OneReviewTitle>{review.title}</OneReviewTitle>
                                <p>{review.description}</p>
                                <div>
                                    <DeleteButton onClick={() => this.deleteReview(review._id)}>delete review</DeleteButton>
                                </div>
                            </ReviewsPosted>
                        )
                    })}
                </ReviewBlock>
                

                <br />
                {this.state.showReviewForm ? <ReviewForm toggleReviewForm={this.toggleReviewForm} showReviewForm={this.state.showReviewForm} reloadPie={this.getOnePie} pieId={this.state.pie._id} /> : null}

            </Container>
        );
    }
}

export default Pie;


