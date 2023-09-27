import React from 'react'
import { Axios } from "axios"
import { useEffect, useState } from "react";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import {Wrapper, Gradient, Card} from '../Style/style'
import { Link } from 'react-router-dom';

function Desert() {
    const [Desert , setDesert] = useState([]);
  

  useEffect (()=>{
        getDesert();
    },[])

    // Function for fetching data
    const getDesert = async() =>{
        
        const check = localStorage.getItem('desert');
        if(check){
            setDesert(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25&tags=drinks`)
            const data = await api.json();
           
            localStorage.setItem('desert', JSON.stringify(data.recipes))
            console.log(data);
            setDesert(data.recipes);
        }
    }
  return (
    <div>
      <Wrapper>
          <h1>Popular Drinks</h1>
              <Splide options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "3rem",
              }}>
                  {Desert.map((recipes)=>{
                  return(
                      <SplideSlide key={recipes.title}>
                              <Card >    
                                <Link to={'/recipe/' + recipes.id}>
                                      <p>{recipes.title}</p>
                                      <img src={recipes.image} alt={recipes.title}/>
                                      <Gradient/>
                                </Link>
                              </Card>
                      </SplideSlide>
                  )
                  })}
              </Splide>
      </Wrapper>
    </div>
  )
}

export default Desert