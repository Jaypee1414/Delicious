import { Axios } from "axios"
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import {Wrapper, Gradient, Card} from '../Style/style'
import { Link } from "react-router-dom";

function Veggie() {
  const [Veggie , setVeggie] = useState([]);
  

  useEffect (()=>{
        getVeggie();
    },[])

    // Function for fetching data
    const getVeggie = async() =>{
        
        const check = localStorage.getItem('veggie');
        if(check){
            setVeggie(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=25&tags=vegetarian`)
            const data = await api.json();
           
            localStorage.setItem('veggie', JSON.stringify(data.recipes))
            console.log(data);
            setVeggie(data.recipes);
        }
    }
  return (
    <div>
      <Wrapper>
          <h1>Vegetarian Food</h1>
              <Splide options={{
                  perPage: 3,
                  arrows: false,
                  pagination: false,
                  drag: "free",
                  gap: "3rem",
              }}>
                  {Veggie.map((recipes)=>{
                  return(
                      <SplideSlide key={recipes.id}>
                              <Card >    
                                <Link to={"/recipe/" + recipes.id}>
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

export default Veggie