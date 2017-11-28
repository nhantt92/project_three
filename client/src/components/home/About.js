import React, { Component } from 'react';
import styled from 'styled-components';
// import slice from './pie_slice.jpg'

// const PieSlice = styled.div`
// display: block;
//  text-align: center;
// padding-top: 50px;
// padding-left: 60px;
// padding-right: 40px;
// img {
//     position: relative;
//     max-width: 600px;
//     border-radius: 3px;
// }
// `

// const Slice = styled.div`
// //  height: 3000px;
// //  width: 1000px;

// background-image: url(${slice})
// ing{
// max-width: 100%;
//      height: auto;
// }
// `

const Sliced = styled.div`
text-align: center;
padding-top: 20px;
padding-bottom: 20px;
img{
    /* position: relative;
    width: 600px; */
    max-width: 50%;
    height: auto;
}
`



class About extends Component {
    render() {
        return (
            <div>
                {/* <PieSlice>
                <img src="https://i.imgur.com/hQNst5k.jpg" />

                </PieSlice> */}

              <Sliced><img src="https://i.imgur.com/Tey9eTH.jpg" /></Sliced>
                
               
                
            </div>
        );
    }
}

export default About;