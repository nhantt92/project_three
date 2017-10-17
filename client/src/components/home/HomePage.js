import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'


const ButtonDecor = styled.span`
    font-family: "News Cycle", sans-serif;
    color: black;
    border-radius: 5%;
    text-align: center;
    background-color: rgba(250, 233, 186, 0.637);
    margin: 20px auto;
    padding: 10px;
    text-decoration: none;
    a {
        text-decoration: none;
        color: black;
    }
`

const ButtonContainter = styled.div`
display: flex

`
const Title = styled.p`
font-family: 'Lobster Two', cursive;
font-size: 50px;
text-align: center;
`

class HomePage extends Component {
    render() {
        return (
            <div>
               <Title>     
                pie shop
                </Title>     
               
               <ButtonContainter>

               <ButtonDecor>
                <Link to="/signup">create an account</Link>
                </ButtonDecor>

                <ButtonDecor>
                <Link to="/users">users</Link>
                </ButtonDecor>


                <ButtonDecor>
                <Link to="/signin">returning user</Link>
                </ButtonDecor>

             

                </ButtonContainter>
            </div>
        );
    }
}

export default HomePage