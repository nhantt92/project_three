import React, { Component } from 'react';
import axios from 'axios'


class EditForm extends Component {
    state ={
        updatedUser: {
            firstName: '',
            lastName: '' ,
            email: '',
            userName: '',
            pies: []
        },
        redirectToUsers: false,
        id: ''

    }

    componentWillMount () {
        this.setState({updatedUser: this.props.user})
    }


// Method to handle change to edit user
    handleChange = (event, id) => {
        // console.log(event)
        const attribute = event.target.name
        const updatedUser = {...this.state.updatedUser}
        // const user = {...this.state.user}
    
        updatedUser[attribute] = event.target.value
        this.setState({ updatedUser })
    }

// Trigger a patch when clicking save
handleSubmit = async (event) => {
    // console.log(event)
    // prevent from refreshing
    event.preventDefault()
    // grab this user
    const userId  = this.state.updatedUser._id
    // grab the updated information the user has inputed
    const clonedUser = {...this.state.updatedUser}
    // respond with 
    const res = await axios.patch(`/api/users/${userId}`, {
        user: clonedUser
    })
    this.setState({updatedUser: res.data})
    console.log(res.data)
}

    render() {
        return (
            <div>
                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input onChange={this.handleChange} name="firstName" type="text" value={this.state.updatedUser.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input onChange={this.handleChange} name="lastName" type="text" value={this.state.updatedUser.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input onChange={this.handleChange} name="email" type="text" value={this.state.updatedUser.email} />
                    </div>
                    <div>
                        <label htmlFor="updatedUserName">Username</label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.updatedUser.userName} />
                    </div>
                  
                    <input type ="submit" value="Save" />
                    </form>
            </div>
        );
    }
}

export default EditForm;