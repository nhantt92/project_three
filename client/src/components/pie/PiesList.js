import React, { Component } from 'react';
import styled from 'styled-components'

const Title = styled.h1`
text-align: center;
font-family: 'Lobster Two', cursive;
text-decoration: underline;
font-size: 50px

`

class PiesList extends Component {
    render() {
        return (
            <div>
                <Title>our pies</Title>
                
            </div>
        );
    }
}

export default PiesList;