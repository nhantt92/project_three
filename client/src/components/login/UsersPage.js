import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import SignUpForm from './SignUpForm'

const Users = styled.div`
font-family: "Oxygen", sans-serif;
text-align: center;
`
const UsersList = styled.div`
font-family: "Oxygen", sans-serif;
a { 
 text-decoration: none;
    color: black;
}
`
const UserListHeader = styled.div`
text-align: center;
`

// ==============================================================================

class UsersPage extends Component {
    state= {
        users: []
    }

      // Call the getAllUsers method as soon as the component is created
  componentWillMount () {
    this.getAllUsers()
  }

  // Use axios to get all users
  // async/await is being used here instead of promises

    getAllUsers = async () => {
        try{
            const res = await axios.get('/api/users')
            this.setState({users: res.data})
        } catch(err) {
            console.log("error")
        }
    }

    render() {
        return (
            <UsersList>
                
                <UserListHeader>
                <h2>Returning User?</h2>
                <h3>Select your name from the list below</h3>
                </UserListHeader>
                {this.state.users.map(user => {
                    return (
                    <Users><Link 
                    key={user._id} 
                    to={`/users/${user._id}`}> {user.firstName} {user.lastName}</Link>
                    </Users>)
                })}
                
                <SignUpForm />
                
            </UsersList>

        );
    }
}

export default UsersPage;