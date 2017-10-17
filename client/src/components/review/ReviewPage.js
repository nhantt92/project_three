import React, { Component } from 'react';
import axios from 'axios'

class ReviewPage extends Component {
    state={
        pie: {
            flavor: '',
            description: '',
            price: '',
            image: '',
            reviews: []
        }
    }

    async componentWillMount () {
        const { pieId } = this.props.match.params
        const res = await axios.get(`/api/shops/pies/${pieId}`)
        this.setState({pie: res.data})
    }

    // CREATE a POst for Review
    // Creat OnClick that creates an empty review
    createNewReview = async () => {
        const { pieId } = this.props.match.params
        const res = await axios.post(`/api/shops/pies/${pieId}/reviews`)
        console.log(res.data)
        this.setState({pie: res.data})
    }

    // deleteReview = async (reviewId) => {
    //     const { pieId } = this.props.match.params
    //     const id = reviewId
    //     const res = await axios.delete(`api/shops/pies${pieId}/reviews/${id}`)
    //     this.setState({pie: res.data})
    // }

    // handleChange(event, reviewId) => {
    //     const attribute = event.target.name
    //     const clonedPie = {...this.state.pie}
    //     const review = clonedPie.reviews.find(i => i._id === reviewId)
    //     review[attribute] = event.target.value
    //     this.setState({pie: clonedPie})
    // }

    // Trigger Patch
    // updateReview = async 

    render() {
        return (
            <div>
                <button onClick={this.createNewReview}>New Review</button>
            </div>
        );
    }
}

export default ReviewPage;