import React from 'react'
import styled from "styled-components"
import * as Aiicons from "react-icons/ai"
const Title = styled.div`

display:flex;
justify-content:flex-start;
align-items:flext-start;

`;
const H1 = styled.h1`
padding-left:200px;
padding-top:80px;
color:white;
font-weight:100;
font-size:50px;
`;
const P = styled.p`
padding-left:200px;

color:white;
font-weight:100;
font-size:20px;
`;
const NavIcon = styled.li`
   
padding-right:200px;
padding-top:20px;
font-size:3rem;
display:flex;
justify-content:flex-start;
align-items:center;
    font-weght:100;
    color:#fff;
    
    `;

function Mission() {
  return (
    <div className='bg'>
   <Title >
    <H1>Our Mission</H1>

   </Title>
   <Title>
    <P>To produce trustworthy and transperant<br/>fruit products, inspiring individuals in<br/>selling natural and quality standards <br/>when choosing consumables they rely on<br/><NavIcon><Aiicons.AiOutlinePlusCircle /></NavIcon></P>
   </Title>
   <Title >
    <H1>Our Mission</H1>

   </Title>
   <Title>
    <P>To produce trustworthy and transperant<br/>fruit products, inspiring individuals in<br/>selling natural and quality standards <br/>when choosing consumables they rely on<br/><NavIcon><Aiicons.AiOutlinePlusCircle /></NavIcon></P>
   </Title>
   </div>
  )
}

export default Mission