import React from 'react'
import styled from "styled-components"
import * as Aiicons from "react-icons/ai"
import * as Ioicons from "react-icons/io"
const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`;
const H1 = styled.h1`
padding-top:50px;
color:grey;
font-size:50px;

`;
const P = styled.p`

color:grey;
font-size:20px;
`;
const P1 = styled.p`
color:grey;
margin-right:60px;
margin-left:10px
font-size:10px;
`;
const HR = styled.hr`
margin-top:80px;

width:100px;
`;
const NavIcon = styled.li`
   
margin-right:1rem;
font-size:2rem;
display:flex;
justify-content:flex-end;
align-items:center;
    
    color:green;
    
    `;
function About() {
  return (
    <>
     <Title>
        <H1>From The Tree <br/>to the bottle...<HR/></H1>
        
     </Title>
     <Title>
     <P>The earth and nature are our only resources to bring<br/>you the best and most natural juice and vinigers</P></Title>
     <Title>
        <NavIcon>
     <Aiicons.AiOutlinePlusCircle /></NavIcon><P1>Read our Story</P1>
    <NavIcon><Ioicons.IoIosArrowDroprightCircle /></NavIcon> <P1>See All Products</P1>
     </Title>
    </>
  )
}

export default About