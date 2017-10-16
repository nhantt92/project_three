import React, { Component } from 'react';
import axios from 'axios'
import UsersPage from './UsersPage'
import { Link, Redirect } from 'react-router-dom'

class User extends Component {
    state ={
        user: {
            firstName: '',
            lastName: '' ,
            email: '',
            userName: '',
            pies: []
        },
        redirectToUsers: false
    }

// Get information about the user when it initially mounts

async componentWillMount () {
    const userId  = this.props.match.params.id
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
    // console.log(res.data)
}

/// I will want to do this to create a custom pie
 // Create a Post for Idea
  // Create onClick that creates an empty Post
  createNewPie = async () => {
    const { userId } = this.props.match.params
    const res = await axios.post(`/api/users/${userId}/pies`)
    // console.log(res.data)
    this.setState({user: res.data})
  }

deleteUser = async (id) => {
    // console.log(res.data)
    const userId  = this.props.match.params.id
    const res = await axios.delete(`/api/users/${userId}`)
    this.setState({user: res.data, redirectToUsers: true})
}

    render() {
        if (this.state.redirectToUsers) {
            return <Redirect to={`/users`} />
        }
        return (
            <div>
                <h1>{this.state.user.firstName} {this.state.user.lastName}'s Account</h1>
                <h2>{this.state.user.email}</h2>
                <h2>username: {this.state.user.userName}</h2>
                <h2>Pies: {this.state.user.pies}</h2>
              
                <button onClick={this.deleteUser}>Delete User</button>
            </div>
        );
    }
}

export default User;





//  {this.state.user.pies.map((pie) => {
  //  return(
    //    <Link key={pie._id} to={`/users/${this.state.user._id}/pies/${pie._id}`}>{pie.ame}</Link>
   // )
// })