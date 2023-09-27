import React from 'react'
import { useState } from 'react'
import { styled } from 'styled-components'
import { useNavigate, NavLink } from "react-router-dom";
import Axios from 'axios'

function Register() {
    const [username ,setUsername] = useState("");
    const [Email ,setEmail] = useState("");
    const [password ,setPassword] = useState("");
    const navigate = useNavigate();

    
    const register =()=>{
        Axios.post("http://localhost:8000/Signup", {
            username: username,
            email: Email,
            password: password
        }).then((response)=>{
            console.log(response);
        })
      navigate('/');
    }

  return (
    <BodyWrap>
      <Wrapper>
          <h1>Sign Up</h1>
          <input 
                id="username" 
                type='text' 
                placeholder='UserName' 
                name='username' 
                onChange={(e)=>{setUsername(e.target.value)}}
           />
          <br/>

          <input 
            id="email"  
            type='email' 
            placeholder='Email Account' 
            name='email'
            onChange={(e)=>{setEmail(e.target.value)}}
          />

          <br/>
          <input 
            id="password"  
            type='password' 
            placeholder='Password' 
            name='password' 
            onChange={(e)=>{setPassword(e.target.value)}}
            />

            <button onClick={register}>
              Sign up
            </button>
            <NavLink to={'/'}>
              <p>Already have an Account</p>
            </NavLink>
            
      </Wrapper>
    </BodyWrap>
  )
}

const BodyWrap = styled.div`
  position: relative; 
  width: 100%;
  height: 600px;
`

const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  width: 40%;
  height: 35rem;

  input{
    position: absolute;
    width: 70%;
    height: 3rem;
    left: 50%;
    right: 50%; 
    top: 35%;
    transform: translate(-50%, -50%);
    outline: none;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid black;
  }

  h1{ 
    margin: 2.5rem;
    font-size: 2rem;

  }
  button{
    height: 3rem;
    width: 70%;
    position: absolute;
    background: transparent;
    border-radius: 3px;
    border: 2px solid #BF4F74;
    color: #BF4F74;
    padding: 0.25em 1em;
    left: 50%;
    right: 50%; 
    top: 73%;
    transform: translate(-50%, -50%);
    background: linear-gradient(35deg, #494949, #313131);
    border: black;
    color: white;
    font-size: 1rem;
    text-decoration: none;
    
    &:hover{
      cursor: pointer;
    }

  }

  p{
    position: absolute;
    color: black;
    text-decoration: underline;
    left: 40%;
    right: 50%; 
    top: 83%;
    width: 50%;
    transform: translate(-50%, -50%);

    &:hover{
      cursor: pointer;
      color: blue;
    }
  }

  #password{
    margin-top: 9rem;
  }

  #email{
    margin-top: 4.5rem;
  }

  `
export default Register