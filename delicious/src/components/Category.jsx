import {FaPizzaSlice, FaHamburger} from "react-icons/fa";
import {GiNoodles, GiChopsticks, GiForkKnifeSpoon} from "react-icons/gi";
import {BiHomeAlt2} from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { useState } from "react"; 
import styled from "styled-components";

function Category() {
    const [active, setActive] = useState("Home")
  return (
    <List>
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
                <h4>Japanese</h4>
            </div>
        </Slink>

        <Slink to={`/cuisine/Asian`}>
            <div>
                <GiForkKnifeSpoon/>
                <h4>Asian</h4>
            </div>
        </Slink>
    </List>
  )
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin: 5rem 2rem;
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
`;

export default Category