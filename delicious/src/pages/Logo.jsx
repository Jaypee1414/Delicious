import React from 'react'
import LOGO from "../Style/LOGO.png"
import styled from 'styled-components'
import { NavLink } from "react-router-dom";

function logo() {
  return (
    <Wrapper>
      <img src={LOGO} height="210" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  margin-top: -2rem;
  positive: absolute;
  width: 100%;

  img{
    margin-top: -1rem;
    margin-left: -5rem;
  }

  button{
    position: relative;
    right: -60rem;
    top: -5.5rem;
    text-decoration: none;
    width: 8rem;
    height: 4rem; 
    cursor: pointer;
    transform: scale(0.8);
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 0.5rem;
    color: white;
    font-size: 1rem;

    &:hover{
      border: 2px solid black;
      color: white;
      background: linear-gradient(to right, #f27121, #e94057);
      border: 2px solid black;
      opacity: 5;
      transition: 0.2s;
    }
  }

  @media only screen and (max-width: 767px){
    margin-top: -2rem;
    positive: absolute;
    width: 100%;
  
    img{
      margin-top: -1rem;
      margin-left: -3rem;
    }
  
}
`;

export default logo