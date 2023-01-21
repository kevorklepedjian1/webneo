import React from 'react'
import styled from "styled-components"
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
font-size:4rem;
letter-spacing: 20px;
`;
const H = styled.h1`
display:flex;
justify-content:center;
align-items:center;
color:white;
padding-top:300px;
font-size:1.25rem;

`;
const P1 = styled.p`

margin-right:60px;
font-size:20px;
color:white;
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
function Our() {
  return (
    <div className='kop'>
    <Title>
<H1>Our vingers</H1>
    </Title>
    <div className='hi0'>
    <Title>
              <H>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br/>Dignissimos doloremque qui totam! Eius quae totam odit facere consectetur,<br/> beatae veniam similique quod quam quas!</H>
       </Title>
  <Title>
       <Ioicons.IoIosArrowDroprightCircle /><P1>See All Products</P1>
        
        </Title>
    </div>
    
    </div>
  )
}

export default Our