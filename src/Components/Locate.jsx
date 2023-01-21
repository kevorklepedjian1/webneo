import React from 'react'
import styled from "styled-components"
import * as Aiicons from "react-icons/ai"
import * as Ioicons from "react-icons/io"
import a from "../s.jpg"
import b from "../x.jpg"
import c from "../Images.jpg"
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
const Img = styled.img`
display:flex;

width:250px;
height:250px;
padding:2px;

 
`;
const Title1 = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;

@media (max-width: 768px) {
    flex-direction:column;
   }
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
function Locate() {
  return (
    <>
    <Title>
       <H1>Locate us or<br/>Partner with us<HR/></H1>
       
    </Title>
    <Title>
    <P>The earth and nature are our only resources to bring<br/>you the best and most natural juice and vinigers</P></Title>
    <Title1>
     <Img src={a}/>
     <Img src={b}/>
     <Img src={c}/>
    </Title1>
   </>
  )
}

export default Locate