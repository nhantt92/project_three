import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Title = styled.h1`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px
`
const PieDescriptionStyle = styled.div`
text-align: center;
font-family: "Lobster Two", sans-serif;
`
const ImageStyle = styled.div`
img: {max-height: 100px
max-width: 100px;
margin: 0 auto
}
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

    // Use axios to get specific pie
    getOnePie = async () => {
        try {
            const { pieId } = this.props.match.params
            const res = await axios.get(`/api/shops/pies/${pieId}`)
            // this.setState({shop: res.data[0]})
            this.setState({pie: res.data})
            console.log(res.data)
        } catch(err) {
            console.log("error")
        }
    }
    

    render() {
        return (
            <div>
                <Title>
                    <h2> {this.state.pie.flavor} pie</h2>
               </Title>
               <ImageStyle>
                  <img src= {this.state.pie.image} alt={this.state.pie.flavor} />
               </ImageStyle>
                <PieDescriptionStyle>
                    {this.state.pie.description}
                    <p>$ {this.state.pie.price}</p>  
                </PieDescriptionStyle>
                    
                <Link to="/pies">return to pies</Link>
              
            </div>
        );
    }
}

export default Pie;