import React from 'react'
import styled from "styled-components"
const Div = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
z-index:9999;
position:relative;
`;
const Div1 = styled.div`
position: absolute;
bottom:150px;
left:40%;
@media (max-width:560px) {
  left:30%
}

`;

const H1 = styled.h1`
padding-top:200px;
display:flex;
justify-content:center;
align-items:center;
color:white;
font-weight:100;
font-size:50px;
text-align:center;
`;
const Btn = styled.button`
z-index:9999;

width:230px;
position: absolute;
`;
function Juices() {
  return (
    <>
   
        
         <Div>
    <div className='h'><H1>kevork</H1></div>
    <Div1>
    <Btn className='btn1'>view our online shop</Btn></Div1>
    <div className='h0'><H1>kevork</H1></div>
    </Div>
    
   </>
  )
}

export default Juices