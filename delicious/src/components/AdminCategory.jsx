import React from 'react'
import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";
import {GiNoodles, GiChopsticks, GiForkKnifeSpoon} from "react-icons/gi";
import { CiLogout } from "react-icons/ci";
import {BiHomeAlt2} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react"; 
import styled from "styled-components";

function AdminCategory() {
    const [active, setActive] = useState("Home")
  return (<List>

        
    <Slink to={`/Home`}>
        <div>
            <BiHomeAlt2/>
            <h4>Home</h4>
        </div>
    </Slink>

    <Slink to={`/cuisine/Italian`}>
        <div>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </div>
    </Slink>

    <Slink to={`/cuisine/Mexican`}>
        <div>
            <FaHamburger/>
            <h4>Mexican</h4>
        </div>
    </Slink>
    
    <Slink to={`/cuisine/Thai`}>
        <div>
            <GiNoodles/>
            <h4>Thai</h4>
        </div>
    </Slink>
    
    <Slink to={`/cuisine/Japanese`}>
        <div>
            <GiChopsticks/>
            <h4>Japan</h4>
        </div>
    </Slink>

    <Slink to={`/Admin/Profile`}>
        <div>
            <CgProfile/>
            <h4>Admin</h4>
        </div>
    </Slink>

    <Slink to={`/`}>
        <div>
            <CiLogout/>
            <h4>Logout</h4>
        </div>
    </Slink>
</List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 2rem;
    width: 100%;

    
    
    @media screen and (max-width: 767px){
        display: flex;
        justify-content: center;
        margin:  5rem -3.5rem;
        width: 100vw;
    }
`;

const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    width: 6rem;
    height: 6rem; 
    cursor: pointer;
    transform: scale(0.8);
    background: linear-gradient(35deg, #494949, #313131);

    &.active{
        background: linear-gradient(to right, #f27121, #e94057);
        h4{
            color:white;
        }
        svg{
            color:white;
        }
    }

    h4{
        color: white;
        font-size: 0.8rem;
    }

    svg{
        color: white;
        font-size: 1.8rem;
    }

    
    @media screen and (max-width: 767px){
        font-size: 0.3rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        margin-right: 0rem;
        text-decoration: none;
        width: 15rem;
        height: 3rem; 
        cursor: pointer;
        transform: scale(0.8);
        background: linear-gradient(35deg, #494949, #313131);

        &.active{
            background: linear-gradient(to right, #f27121, #e94057);
            h4{
                color:white;
            }
            svg{
                color:white;
            }
        }

        h4{
            color: white;
            font-size: 0.5rem;
        }

        svg{
            color: white;
            font-size: 1rem;
        }
    }
`;



export default AdminCategory