import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'

class LoginPage extends Component {
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
            console.log(error)
        }
    }

    render() {
        return (
            <div>
                <h2>Returning User?</h2>
                <h3>Select your name from the list below</h3>
                {this.state.users.map(user => {

                    return (<Link key={user._id}></Link>)
                })}
            </div>
        );
    }
}

export default LoginPage;