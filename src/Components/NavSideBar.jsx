import React, {useState} from 'react'
import styled from "styled-components"
import { Link } from 'react-router-dom'
const Sidelink = styled.li`
color:black;
display:flex;
justify-content:space-between;
align-items:center;
margin-left:100px;
padding:20px;
height:5px;
position:relative;
text-decoration:none;
list-type:none;
`;
const Sidelabel = styled.span`

`;
const Droplink = styled.li`
background:white;
heigth:60px;
padding-right:20px;
display:flex;
justify-content:flex-end;
align-items:center;
text-decoration:none;
color:black;
font-size:18px;



`;
function NavSideBar({item}) {
    const [subnav, setSubnav]= useState(false);
    const showSubnav = () => setSubnav(!subnav);
  return (
    <>
   <Sidelink to={item.path} onClick={item.subNav && showSubnav}>
    <div>
        <Sidelabel>{item.title}</Sidelabel>
    </div>
    <div>
        {item.subNav && subnav
        ?item.op
        :item.subNav
        ?item.clo
        : null
        }
    </div>
   </Sidelink>
   {subnav && item.subNav.map((item, index) => {
    return(
        <Droplink to={item.path} key={index}>
<Sidelabel>{item.title}</Sidelabel>
        </Droplink>
    )
   })}
    </>
  )
}

export default NavSideBar