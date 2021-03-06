import React, { Component } from 'react';
import styled from 'styled-components';

const CustomContainer = styled.div`
display: flex;
padding-top: 30px;
flex-direction: column;
border: 1px solid gray;
`
const Image = styled.div`
text-align: center;
padding-top: 20px;
margin-left: 50px;
img{
    max-width: 50%;
    height: auto;
    border-radius: 5px;
    

}
`
const Whoops = styled.div`
padding-top: 10px;
font-family: "nunito", sans-serif;
text-align: center;
`

class Custom extends Component {
    render() {
        return (
            <CustomContainer>
                <Image>
                    <img src="https://i.imgur.com/4uTo81R.jpg" alt="black and white snapshot of a girl who has been hit in the face with a pie" />
                </Image>
                <Whoops>
                    <h3>Whoops! </h3>
                    <p>Pie in the face!</p> 
                    <p>Excuse our mess while we clean up this page.</p>
                </Whoops>
            </CustomContainer>
        );
    }
}

export default Custom;