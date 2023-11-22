import React from 'react'
import styled from 'styled-components'
import {BiSearch} from "react-icons/bi"
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

function Search() {
    const [input,setInput] = useState("");
    const navigate = useNavigate();
    const HandleSubmit = (e) =>{
        e.preventDefault();
        navigate('/searched/' + input);
    }
  return (
    <FormStyle onSubmit={HandleSubmit}>
            <div>   
                <BiSearch/>
                <input 
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />  
            </div>
    </FormStyle>     
  )
}

const FormStyle = styled.form`
    margin-top: 3rem;
    positive: absolute;
    width: 100%;
    div{
        margin-left: 12rem;
        position:relative;
        width:100%;
    }
    input{
        width:60%;
        border:none;
        background: linear-gradient(35deg, #494949 , #313131);
        font-size: 1.5rem;
        color: white;
        padding: 1rem 6rem;
        border: none;
        border-radius: 1rem;
        outline: none;
    }

    
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }


    @media screen and (max-width: 767px){
        margin-top: 3rem;
        positive: absolute;
        width: 100%;
        margin-right: 30%;

        div{
            position:relative;
            margin-left: 0%;
            margin-right: 30%;
            width:100%;

            input{
                margin-right: 30%;
                position: relative;
                width:30%;
                border:none;
                background: linear-gradient(35deg, #494949 , #313131);
                font-size: 1.5rem;
                color: white;
                padding: 1rem 6rem;
                border: none;
                border-radius: 1rem;
                outline: none;
            }
        }

    
        
        svg{
            position: absolute;
            top: 50%;
            left: -30%;
            transform: translate(100%, -50%);
            color: white;
        }
    }
`;

export default Search