import React, { Component } from 'react';
import axios from 'axios'
// import UsersPage from './UsersPage'
import { Link, Redirect } from 'react-router-dom'
import EditForm from './EditForm'
import styled from 'styled-components'
// import Toggle from 'react-toggle'

const UserDetails = styled.div`
    padding: 50px;
    text-align: center;
    font-family: "muli", sans-serif;
`

const Button = styled.button`
font-family: "nunito", sans-serif;
cursor: pointer;
font-size: 15px;
font-weight: 9px;
color: black;
border-radius: 3px;
text-align: center;
background: transparent;
background-color: rgba(250, 233, 186, 0.2);
padding: 0.25em 1em;
text-decoration: none;
a {
    text-decoration: none;
    color: black;
}`
const ReturnButton = Button.extend`

`

class User extends Component {
    state ={
        user: {
            firstName: '',
            lastName: '' ,
            email: '',
            userName: '',
            pies: []
        },
        redirectToUsers: false,
        editUserDetails: false
    }

// Get information about the user when it initially mounts
async componentWillMount () {
    const userId  = this.props.match.params.id
    const res = await axios.get(`/api/users/${userId}`)
    this.setState({user: res.data})
    // console.log(res.data)
}

deleteUser = async (id) => {
    // console.log(res.data)
    const userId  = this.props.match.params.id
    const res = await axios.delete(`/api/users/${userId}`)
    this.setState({user: res.data, redirectToUsers: true})
}

// Create a Patch for User
// Add onChange listener for the firstName, lastName, email, and username

handleChange = (event, id) => {
    // console.log(event)
    const attribute = event.target.name
    const clonedUser = {...this.state.user}
    // const user = {...this.state.user}
    clonedUser[attribute] = event.target.value
    this.setState({ user: clonedUser })
}

// custom method to have user's updated info sent back to the database. 
showUser = async () => {
    const userId = this.props.match.params.id
    const response = await axios.get(`/api/users/${userId}`)
    this.setState({ user: response.data })
    console.log(response.data)
}

toggleEdit = () => {
    this.setState({editUserDetails: !this.state.editUserDetails})
}


    render() {
        if (this.state.redirectToUsers) {
            return <Redirect to={`/users`} />
        }

        if (!this.state.editUserDetails) {

            return (
             <UserDetails>
              <h1>{this.state.user.firstName} {this.state.user.lastName}'s account</h1>
                <h2>{this.state.user.email}</h2>
                <h2> username: {this.state.user.userName}</h2>
                <Button onClick={this.toggleEdit}>edit account</Button>
                <Button onClick={this.deleteUser}>delete user</Button>
                <ReturnButton><Link to ="/users">return to all users</Link></ReturnButton>
                </UserDetails>
            )
        }

        else {
            return (
                <div>
                    <EditForm showUser={this.showUser} 
                    toggleEdit={this.toggleEdit} 
                    handleChange={this.state.user} user={this.state.user} />
                </div>
            )
        } 


    }
    }
        
export default User;





//  {this.state.user.pies.map((pie) => {
  //  return(
    //    <Link key={pie._id} to={`/users/${this.state.user._id}/pies/${pie._id}`}>{pie.ame}</Link>
   // )
// })


/// I will want to do this to create a custom pie
 // Create a Post for Idea
  // Create onClick that creates an empty Post
//   createNewPie = async () => {
//     const { userId } = this.props.match.params
//     const res = await axios.post(`/api/users/${userId}/pies`)
//     // console.log(res.data)
//     this.setState({user: res.data})
//   }