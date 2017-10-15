import React, { Component } from 'react';
import axios from 'axios'

class SignUpForm extends Component {
    state = {
        newUser: {
            firstName: '',
            lastName: '',
            email: '',
            userName: '',
        }, 
        newUserId: ''
    }


    render() {
        return (
            <div>
                <h1>Sign-Up</h1>
                <fomr>
                    <div>
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" value={this.state.newUser.firstName} />
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" value={this.state.newUser.lastName} />
                    </div>
                    <div>
                        <label htmlFor="email">Email Address</label>
                        <input type="text" value={this.state.newUser.email} />
                    </div>
                    <div>
                        <label htmlFor="userName">Username</label>
                        <input type="text" value={this.state.newUser.userName} />
                    </div>
                    <button>Create</button>
                </fomr>
            </div>
        );
    }
}

export default SignUpForm;