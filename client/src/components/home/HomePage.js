import React, { Component } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import image from "./backgroundimage.jpg"
import pieImage from "./background_image_pie.jpg"

const ButtonDecor = styled.span`
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


// const Title = styled.p`
// font-family: 'Lobster Two', cursive;
// font-size: 50px;
// padding-top: 5px;
// text-align: center;
// `

 const BackgroundImage = styled.div`
 text-align: center;
 padding-top: 10px;
 img{
     position: relative;
     width: 1200px;
    
     
    
 }
// height: 1500px;
// width: 1500px;
// background-image: url(${pieImage})
 `

class HomePage extends Component {
    render() {
        return (
            <BackgroundImage>
               {/* <Title>     
                pie shop
                </Title>     */}
               
            
           
                 {/* <img src="https://i.imgur.com/LF9TG0f.jpg" /> */}
                
              <img src="https://i.imgur.com/TliDwQu.jpg" />
            



               {/* <ButtonDecor>
                <Link to="/signup">create an account</Link>
                </ButtonDecor>

                <ButtonDecor>
                <Link to="/users">users</Link>
                </ButtonDecor>


                <ButtonDecor>
                <Link to="/signin">returning user</Link>
                </ButtonDecor>

              */}

                
                </BackgroundImage>
        );
    }
}

export default HomePage


/// // background-image: url(${image});
//background-image: url("https://i.imgur.com/LF9TG0f.jpg")