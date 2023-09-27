import { Axios } from "axios"
import { useEffect, useState } from "react";
import { styled } from "styled-components";
import {Splide, SplideSlide} from "@splidejs/react-splide"
import "@splidejs/splide/dist/css/splide.min.css"
import {Wrapper, Gradient, Card} from '../Style/style'
import {FaFire} from 'react-icons/fa'
import { Link } from "react-router-dom";
function Popular() {
    const [Popular , setPopular] = useState([]);
    useEffect (()=>{
        getPopular();
    },[])
    const getPopular = async() =>{
        
        const check = localStorage.getItem('popular');
        if(check){
            setPopular(JSON.parse(check));
        }else{
            const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=20`)
            const data = await api.json();
           
            localStorage.setItem('popular', JSON.stringify(data.recipes))
            console.log(data);
            setPopular(data.recipes);
        }
    }
    return (
        <div>
                <Wrapper>
                    <h1>Popular Picks <FaFire/> </h1>
                        <Splide options={{
                            perPage: 4,
                            arrows: false,
                            pagination: false,
                            drag: "free",
                            gap: "3rem",
                        }}>
                            {Popular.map((recipes)=>{
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

export default Popular