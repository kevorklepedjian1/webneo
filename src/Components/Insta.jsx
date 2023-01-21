import React from 'react'
import styled from "styled-components"
import a from "../s.jpg"
import b from "../x.jpg"
import c from "../Images.jpg"
const Title = styled.div`
display:flex;
justify-content:center;
align-items:center;
text-align:center;
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
const Titles = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
text-align:center;
`;
const Img = styled.img`
display:flex;

width:250px;
height:250px;
padding:2px;

 
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
const P = styled.p`

color:green;
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
function Insta() {
  return (
    <div className='sa'>
        <Title>
       <H1>From The Tree <br/>to the bottle...</H1>
       
    </Title>
    <Titles>
        <P>Go to instagram</P>
    </Titles>
    <Title1>
     <Img src={a}/>
     <Img src={b}/>
     <Img src={c}/>
    </Title1>

    </div>
  )
}

export default Insta