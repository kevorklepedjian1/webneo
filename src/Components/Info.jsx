import React from 'react'
import styled from "styled-components"
import * as Imicons from "react-icons/im"   
const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
`;
const H1 = styled.h1`
padding-top:20px;
color:grey;
font-size:50px;

`;
const NavIcon = styled.li`
   padding-top:50px;
margin-right:1rem;
font-size:4rem;
display:flex;
justify-content:flex-end;
align-items:center;
    
    color:green;
    
    `;
function Info() {
  return (
    <div className='low'>
    <Title>
        <NavIcon>
    <Imicons.ImQuotesLeft/></NavIcon>
       </Title><Title>
    <H1>When Life gives you fruits,make<br/>natural juice and gather over<br/>refined sips of natural</H1>
</Title> 
<Title>
    <button className='btn'>read our menisfesto</button>
</Title>
    </div>
  )
}

export default Info