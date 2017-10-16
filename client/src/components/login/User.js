import React, { Component } from 'react';
import axios from 'axios'
import UsersPage from './UsersPage'
import { Link } from 'react-router-dom'

class User extends Component {
    state ={
        user: {
            firstName: '',
            lastName: '' ,
            email: '',
            userName: '',
            pies: []
        }
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



    render() {
        return (
            <div>
                <h1>{this.state.user.firstName} {this.state.user.lastName}'s Account</h1>
                <h2>{this.state.user.email}</h2>
                <h2>username: {this.state.user.userName}</h2>
                <h2>Pies: {this.state.user.pies}</h2>
              
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