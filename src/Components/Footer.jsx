import React from 'react'
import styled from "styled-components"
import logo from "../logo.png"
import a from "../s.jpg"
import b from "../x.jpg"
import c from "../Images.jpg"
const Title1 = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
padding-left:50px;

`;
const Img = styled.img`
display:flex;

width:50px;
height:50px;
padding:2px;

 
`;

const Title14 = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
flex-direction:row
margin-top:90px;
`;
const P = styled.p`
padding-bottom:90px;


`;

const TItle = styled.div`
display:flex;
justify-content:flex-start;
align-items:center;
text-align:center;
flex-direction:row;

`;
const Title12 = styled.div`
display:flex;
justify-content:flex-end;
align-items:center;
text-align:center;
flex-direction:column;
`;
const Sidelink = styled.li`
color:black;
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

margin-right:250px;
height:5px;

text-decoration:none;
list-type:none;
`;
const HR = styled.hr`
margin-top:10px;

width:100px;
`;
const HR2 = styled.div`
position: relative;
  width: 300px;
`;
const Customemail = styled.input`
width: 200%;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 10px 100px 10px 20px; 
  line-height: 1;
  box-sizing: border-box;
  outline: none;
`;
const Customebutton = styled.input`
width: 50%;
  border: 1px solid #ccc;
  border-radius: 100px;
  padding: 10px 100px 10px 20px; 
  line-height: 1;
  box-sizing: border-box;
  outline: none;
  background-color:green;
`;
function Footer() {
  return (<>
     <footer>
    <div class="content">
      <div class="link-boxes">
        <ul class="box">
          <li class="link_name">EShop</li>
          <li class="link_name" > <a href="#">Our Story</a></li>
          <li class="link_name" ><a href="#">Our Products</a></li>
          <li class="link_name" ><a href="#">Opportunities</a></li>
          <li class="link_name" ><a href="#">Contact us</a></li>
        </ul>
        
        <ul class="box">
          <li class="link_name">Contcat with us</li>
          <li>info@le-pre.com</li>
          <li>@le-pre.lb </li>
          <HR/>
          <li>Subscrib to our newsletter</li>
          <TItle>
            
          <li><Customemail type="text" placeholder="Enter your email"/></li>
          <li><Customebutton type="button" value="Subscribe"/></li></TItle>
        </ul>
        
        <ul class="box input-box">
          <li >Lebanon offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          
          <HR/>
          <li >Dubai offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <HR/>
          <li >Dubai offices</li>
          <HR/>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <li>Lorem ipsum dolor sit</li>
          <HR/>
        </ul>
      </div>
    </div>
   <div className='j'>
        
          <img  src={logo}/>
       
        
       
        
    <div className='li'>
          <p>terms and condition | </p>
          <p>terms and condition | </p>
          <p>terms and condition</p></div>
    <div className='li'>
    <Img src={a}/>
     <Img src={b}/>
     <Img src={c}/>
      </div>  
       </div>
    
  </footer>
     </>
    
  )
}

export default Footer