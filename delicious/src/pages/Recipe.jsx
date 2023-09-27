import React from 'react'
import { styled } from 'styled-components'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import  Category  from "../components/Category"
import  Search  from "../components/Search"

function Recipe() {
  const [details, setDetails] = useState({});
  const [active, setActive] = useState("Instruction");
  let params = useParams();
  const getDetails = async () => {
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);

    const detailsData = await data.json();
    setDetails(detailsData);
  }

  useEffect(()=>{
    getDetails();
    console.log(details);
  },[])
  return (
    <div>
      <Search/>
      <Category/>
    
    <DetailWrapper>
      <div>
       <h2>{details.title}</h2>
       <img src={details.image} alt="details.title"/>
      </div>
      <Info>
        <Button className={active === "Instruction" ? `active` : ""} onClick={() => setActive(`Instruction`)}>Instruction</Button>
        <Button className={active === "Ingredients" ? `active` : ""} onClick={() => setActive(`Ingredients`)}>Ingredients</Button>
       {active === "Instruction"  && (
        <div>
          <ul>
            {/* <h4 dangerouslySetInnerHTML={{ __html: details.summary}}></h4> */}
            <h4 dangerouslySetInnerHTML={{ __html: details.instructions}}></h4>
          </ul>
        </div>
       )}
       {active === "Ingredients"  && (
        <ul>
          {details.extendedIngredients.map((ingredient) =>{
            return(
            <li key={ingredient.id}>{ingredient.original}</li>
            ) 
          })}
        </ul>
       )}
      </Info>
    </DetailWrapper>  
    </div>
  )
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display:flex;
  .active{
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2{
    margin-top: 2rem;
  }
  li{
    font-size: 1.2rem;
    line-height: 2.5rem
  }
  ul{
    margin-top: 5rem;
  }  
  div{
    display: fixed;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;

const Info = styled.div`
  margin-left: 10rem;
`;
export default Recipe