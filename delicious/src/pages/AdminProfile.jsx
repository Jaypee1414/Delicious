import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import { Link,useParams } from 'react-router-dom'
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

function AdminProfile() {
    const [cusine, setCusine] = useState([]);
    let params = useParams();
    const getCusine = async (name) =>{
      const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=30`);
  
      const recipes = await data.json();
      setCusine(recipes.results);
  
    }
  
  useEffect(()=>{
    getCusine("Japanese");
  },[]);
  return (
    <Wrapper>
    <Details>
      <h1>ACCOUNT NAME</h1>
      <h3>Name: SUKUNA</h3>
      <p>Anonymous</p>
    </Details>
    <Add>
      <br/>
    </Add>
    <Grid
      animate={{opacity: 1}}
      initial={{opacity: 0}}
      exit={{opacity: 0}}
      transition={{duration: 0.5}}
    >
      {cusine.map((item)=>{
        return(
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="item.title"/>
              <h4>{item.title}</h4>
            </Link>
            <div id="icon">
                <AiOutlineCloseCircle/> <AiOutlineCheckCircle/>
            </div> 
          </Card>
        )
      })}
    </Grid>
  </Wrapper>
  )
}


const Wrapper = styled.div`
  position: relative;
`
const Details = styled.div`
  position: absolute;
  left: 0;
  display: block;

  h1{ 
    font-weight: 600;
    font-size: 1.5rem;
  }

  h3{
    font-size:1rem;
  }
  p{
    font-weight: 700;
    margin-left: 2rem;
  }
`

const Add = styled.div`
  position: absolute;
  margin: 8rem 2rem;
  width: 100%;
  left: 0;

  Button{
    width: 15%;
    height: 3.2rem;
    border-radius: 0.3rem;
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
    cursor: pointer;
  }
  input{
    width: 70%;
    height: 8rem;
    margin: 0.5rem;

    &:placeholder{
      font-size: 5rem;
    }
  }

  image{
    
  }
  
  @media screen and (max-width: 767px){
    Button{
      width: 25%;
      height: 3rem;
      border-radius: 0.3rem;
      background: linear-gradient(35deg, #494949, #313131);
      color: white;
      cursor: pointer;
    }
  }

  `

  
  
const Grid = styled(motion.div)`
padding-top: 15rem;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
grid-gap: 3rem;

`;

const Card = styled.div`
margin-right: 2rem;
img{
  width: 90%;
  border-radius: 2rem;
}
a{
  text-decoration: none;
}
h4{
  text-align: center;
  padding: 1rem;
}
#icon{
    font-size: 2rem;
    margin-left: 6rem;
}
`;

export default AdminProfile