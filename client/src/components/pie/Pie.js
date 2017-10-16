import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px

`

class Pie extends Component {
    state={
        pie: {
            flavor: '',
            price: '',
            description: '',
            image:''
        }
    }

    // call to get one pie

    componentWillMount() {
        this.getOnePie()
    }

    // get specific pie

    getOnePie = async () => {
        try {
            const { pieId } = this.props.match.params
            const res = await axios.get('/api/shops/pies/pieId')
            // this.setState({shop: res.data[0]})
            this.setState({pie: res.data})
        } catch(err) {
            console.log("error")
        }
    }
    

    render() {
        return (
            <div>
                <Title>{pie.flavor}</Title>
            </div>
        );
    }
}

export default Pie;