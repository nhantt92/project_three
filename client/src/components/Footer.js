import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const ButtonDecor = styled.div`
font-family: "Bree Serif", sans-serif;
font-size: 15px;
font-weight: 9px;
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

const FooterContainer = styled.div`
color: black;

`

class Footer extends Component {
    render() {
        return (
            <FooterContainer>
                
                 <ButtonDecor>
                <Link to="/signup">create an account</Link>
                </ButtonDecor>

                <ButtonDecor>
                <Link to="/users">users</Link>
                </ButtonDecor>


                <ButtonDecor>
                <Link to="/signin">returning user</Link>
                </ButtonDecor>

             
            </FooterContainer>
        );
    }
}

export default Footer;