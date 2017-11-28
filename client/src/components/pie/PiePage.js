import React, { Component } from 'react';
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom'

const PiePageContainer = styled.div`
background-color: white;
border-radius: 5px;
max-width: 1000px;
margin: 20px auto;
border: 1px solid rgba(87, 87, 87, .2);
`

const Title = styled.h1`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px
`

const PieContainer = styled.div`

display: inline-flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: space-between;
`
const PieImage = styled.image`
// margin 0 auto;
margin-left: 30px;
margin-right: 20px;
img{
    max-width: 200px; 
    border-radius: 5px;
  }
  `
const SpacerDiv = styled.div`
height: 200px;
`

// ==============================================================================

class PiePage extends Component {
      state={
            shop: {
                pies: []
            }
    }

    //call to getAllPies
    componentWillMount() {
        this.getAllPies()
    }


    // User axios to get all pies 

    getAllPies = async () => {
        try {
            const res = await axios.get('/api/shops')
            this.setState({shop: res.data[0]})
        } catch(err) {
            console.log("error")
        }
    }

    render() {
        return (
            <PiePageContainer>
                <Title>our pies</Title>
                 {this.state.shop.pies.map(pie => {
                    return (
                 <PieContainer>    
              <Link key={pie._id} to={`/pies/${pie._id}`}> 

                        <PieImage>
                        <img src={pie.image}/> 
                        </PieImage>
              </Link> 

             <SpacerDiv></SpacerDiv>

              </PieContainer> 
                        
                    )
                })} 
                
            </PiePageContainer>
        );
    }
}

export default PiePage;

