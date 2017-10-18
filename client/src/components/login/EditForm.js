import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

const Button = styled.button`
font-family: "Bree Serif", sans-serif;
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


class EditForm extends Component {
    state ={
        updatedUser: {
            firstName: '',
            lastName: '' ,
            email: '',
            userName: ''
            
        },
        redirectToUsers: false,
        id: ''

    }

    componentWillMount () {
        this.setState({updatedUser: this.props.user})
    
    }

    // componentDidUpdate () {
    //     this.handleRedirect({updatedUser: this.props.user})
    // }


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
   
   await this.props.showUser()
   this.props.toggleEdit()
   this.setState({updatedUser: res.data})
}


    // Redirect to user's individual id page
    // <Redirect push to= "/users/:id" />
    
        // console.log(res.data)


// custom method to handle redirecting
// handleRedirect = async (event) => {
//      <Redirect to={`users/:id`} />
// }

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
                  
                    <Button><input type ="submit" value="Save" /></Button>
                    </form>
            </div>
        );
    }
}

export default EditForm;