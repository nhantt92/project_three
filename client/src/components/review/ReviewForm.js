import React, { Component } from 'react';
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom'

class ReviewForm extends Component {
    state = {
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
    if (this.state.redirectorToPiePage) {
        const { pieId } = this.props.pieId
        return <Redirect to = {`/api/shops/pies/${pieId}`} />
    }
return (
    <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label htmlFor="title">Title</label>
                <input onChange={this.handleChange} name="title" type="text" value={this.state.newReview.title} />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input onChange={this.handleChange} name="description" type="text" value={this.state.newReview.description} />
            </div>

            
            <button>Create</button>
        </form>
    </div>
);
}
}

export default ReviewForm;