import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'

const SignUpFormContainer = styled.div`
text-align: center;
padding: 10px;
margin: 0 auto
`
const SignUpCreate = styled.button`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 3px;
text-align: center;
background-color: rgba(250, 233, 186, 0.637);
padding: 0.25em 1em;
text-decoration: none;
a {
    text-decoration: none;
    color: black;
}`


class SignUpForm extends Component {
    state = {
        newUser: {
            firstName: '',
            lastName: '',
            email: '',
            userName: ''
        }, 
        redirectToUsersPage: false,
        newUserId: ''
    }

    // handleChange is called every time a user makes an input event
    handleChange = (event) => {

        //this is equal to the name attribut on the input field
        const attribute = event.target.name
        // Deeply clone this.state.newUser
        const updateUser = {...this.state.newUser}

        // Use bracket syntact to dynamically update the object
        //event.target.value is always equal to what the user is typing

        updateUser[attribute] = event.target.value
        // console.log(event)
        this.setState({newUser: updateUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        // POST to our API and create a new user
        // The second argument here is the payload that 
        // is consumed on the server side as req.body
        const res = await axios.post('/api/users', {
            'user': this.state.newUser
        })

        // After the post is complete, set the state to triffer the redirect 
        // and add the newly created user's is to the sate so we can change the route
        this.setState({redirectToUsersPage: true, newUserId: res.data._id})
    }

    render() {
        // If statement which is triggered after a new user posts is successful
        if (this.state.redirectToUsersPage) {
            // This is redirecting to the users individual page
            return <Redirect to={`users/${this.state.newUserId}`} />
        }
        return (
            <SignUpFormContainer>
                <h1>Sign-Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        {/* <label htmlFor="firstname"></label> */}
                        <input onChange={this.handleChange} name="firstName" placeholder="first name" type="text" value={this.state.newUser.firstName} />
                    </div>
                    <div>
                        {/* <label htmlFor="lastName">Last Name</label> */}
                        <input onChange={this.handleChange} name="lastName" placeholder= "last name" type="text" value={this.state.newUser.lastName} />
                    </div>
                    <div>
                        {/* <label htmlFor="email">Email Address</label> */}
                        <input onChange={this.handleChange} name="email" placeholder= "email" type="text" value={this.state.newUser.email} />
                    </div>
                    <div>
                        {/* <label htmlFor="userName">Username</label> */}
                        <input onChange={this.handleChange} name="userName" placeholder= "username" type="text" value={this.state.newUser.userName} />
                    </div>
                    <SignUpCreate>create</SignUpCreate>
                </form>
            </SignUpFormContainer>
        );
    }
}

export default SignUpForm;