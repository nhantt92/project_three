import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class SignInPage extends Component {
    state = {
        users: []
    }

    // Use axios to get all of the users
 getAllUsers = async () => {
     try {
         const res = await axios.get('/api/users')
         this.setState ({users: res.data})
     } catch (err) {
         console.log(err)
     }
 }

    render() {
        return (
            <div>
                <h2>Sign In Page</h2>
                <form>
                    <div>
                        <label htmlFor="userName">username </label>
                     <input name="userName"
                        type="text"
                        />
                    </div>
                    <div>
                        <label htmlFor="email">email</label>
                        <input name="email"
                        type="text"
                        />
                    </div>
                    <button>signin</button>
                </form>
            </div>
        );
    }
}

export default SignInPage;