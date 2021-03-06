import React, { Component } from 'react';
import axios from 'axios'
// import { Redirect } from 'react-router-dom'
import styled from 'styled-components';

const Input = styled.input`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 3px;
text-align: center;
background-color: rgba(250, 233, 186, 0.2);
padding: 0.25em 1em;
text-decoration: none;
a {
    text-decoration: none;
    color: black;
}`

const EditFormStyle = styled.div`
padding-top: 40px;
text-align: center;
font-family: "Oxygen", sans-serif;

`


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



    render() {
        return (
            <EditFormStyle>

                    <div>edting account</div>
                    <br />
                    <br />

                    <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstname">first name: </label>
                        <input onChange={this.handleChange} name="firstName" type="text" value={this.state.updatedUser.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">last name: </label>
                        <input onChange={this.handleChange} name="lastName" type="text" value={this.state.updatedUser.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">email address: </label>
                        <input onChange={this.handleChange} name="email" type="text" value={this.state.updatedUser.email} />
                    </div>
                    <div>
                        <label htmlFor="updatedUserName">username: </label>
                        <input onChange={this.handleChange} name="userName" type="text" value={this.state.updatedUser.userName} />
                    </div>
                  <br />
                  <div>
                  <Input type ="submit" value="save changes" />
                  </div>
                   
                    </form>
            </EditFormStyle>
        );
    }
}

export default EditForm;