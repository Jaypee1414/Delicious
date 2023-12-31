import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import {motion} from "framer-motion"
import { Link,useParams } from 'react-router-dom'
import  Category  from "../components/Category"
import  Search  from "../components/Search"


function Cusine() {
  
  const [cusine, setCusine] = useState([]);
  let params = useParams();
  const getCusine = async (name) =>{
    const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}&number=30`);

    const recipes = await data.json();
    setCusine(recipes.results);

  }

useEffect(()=>{
  getCusine(params.type);
},[params.type]);

  return (
    <div>
      <Search/>
      <Category/>
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
          </Card>
        )
      })}
    </Grid>
    </div>
  )
}


const Grid = styled(motion.div)`
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
`;

export default Cusine