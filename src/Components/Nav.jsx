import React, {useState} from 'react'
import logo from "../logo.png"
import styled from "styled-components"
import { Link } from 'react-router-dom'
import * as Faicons from "react-icons/fa"
import * as Aiicons from "react-icons/ai"
import { NavItems } from './NavItems'
import NavSideBar from './NavSideBar'

import "./Nav.css"
function Nav() {

    const Navbar = styled.div`
    background: whitesmoke;
    height: 80px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    `;
    const Navbar1 = styled.div`
 
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right:3rem;
    padding-left:3rem;
    padding-top:2rem;
    z-index:1000;
    `;
    const NavIcon = styled.li`
   
    margin-right:2rem;
    font-size:2rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:10px;
    color:red;
    
    `;
    const NavIcon1 = styled.li`
   
    margin-right:2rem;
    font-size:2rem;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    gap:10px;
    color:red;
    margin-top:50px
    `;
   
    const Sidebarnav = styled.nav`
    display: flex;
    justify-content: flex-end;
    align-items: center;
   background:white;
   
   
    `;
    const Sidebarwrappernav = styled.nav`
    background-color:white;
    width:${({NavSideBar}) => (NavSideBar ? '50%':'30%')};
    height:120vh;
     position:fixed;
    top:0;
    right: ${({sidebar}) => (sidebar ? '0':'-100%')};
    z-index:10;
     @media (max-width:960px) {
      width:80%;
    }
   
    `;
    const Hor = styled.hr`
    width:200px;
    
    `;

    const [sidebar, setsidebar]= useState(false);
    const showsidebar = () => setsidebar(!sidebar);
  return (
   <>
   <div className='col'>
   
   <Navbar1>
   <img src={logo}/>
    <NavIcon to="#">
       {sidebar ?null: 
        <><Aiicons.AiFillAccountBook /><Faicons.FaBars onClick={showsidebar} /></> 
        }
    </NavIcon>
   </Navbar1>
   <Sidebarnav >
    <Sidebarwrappernav sidebar={sidebar}>
    <NavIcon1 to="#">
        <Aiicons.AiOutlineClose onClick={showsidebar}/>
        
    </NavIcon1>
      {NavItems.map((item,index) => {
        return <><NavSideBar item={item} key={index} /></>
      })}
    </Sidebarwrappernav>
   </Sidebarnav></div>
   
   </>
  )
}

export default Nav