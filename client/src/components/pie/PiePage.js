import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Title = styled.h1`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px

`

class PiePage extends Component {
      state={
        pies: []
    }

    //call to getAllPies
    componentWillMount() {
        this.getAllPies
    }


    // User axios to get all pies 

    getAllPies = async () => {
        try {
            const res = await axios.get('/api/pies')
            this.setState({pies: res.data})
        } catch(err) {
            console.log("error")
        }
    }

    render() {
        return (
            <div>
                <Title>our pies</Title>
                 {this.state.pies.map(pie => {
                    return (
                        
              <Link key={pie._id}
              to={`/pies/${pie._id}`}> {pie.flavor}</Link>
                        
                    )
                })} 
                
            </div>
        );
    }
}

export default PiePage;

