import React from 'react'
import styled from "styled-components"
import * as Tiicons from "react-icons/ti"   
import * as Ioicons from "react-icons/io"
const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`;
const H1 = styled.h1`
padding-top:300px;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-size:100px;
font-weight:100;
`;
const P1 = styled.p`

margin-right:60px;
font-size:20px;

`;
const NavIcon = styled.li`
   padding-top:50px;
margin-right:2rem;
font-size:2rem;
display:flex;
justify-content:flex-end;
align-items:center;
    
    color:white;
    @media (max-width: 768px) {
       font-size:1rem;
      }
    
    `;
function Happy() {
  return (
    <div className='hi'>
        <Title>
              <H1>Our Story</H1>
        </Title>
        <Title>
            <NavIcon>
            <Tiicons.TiTick></Tiicons.TiTick><p>No Added Suger</p></NavIcon>
            <NavIcon>
            <Tiicons.TiTick></Tiicons.TiTick><p>No Additives</p></NavIcon>
            <NavIcon>
            <Tiicons.TiTick></Tiicons.TiTick><p>No Preservatives</p></NavIcon>
        </Title>
        <Title>
        <NavIcon><Ioicons.IoIosArrowDroprightCircle /><P1>See All Products</P1></NavIcon> 
        <NavIcon><Ioicons.IoIosArrowDroprightCircle /><P1>See All Products</P1></NavIcon> 
        </Title>
    </div>
  )
}

export default Happy