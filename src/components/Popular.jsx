import React, { useEffect,useState } from 'react'
import styled from 'styled-components'
import { Splide,SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
const Popular = () => {
  const [popular, setPopular] = useState([])
  
  useEffect(()=>{
    getPopular()
  },[])
  
  const getPopular =async()=>{

  const check = localStorage.getItem('popular')
  if(check){
    setPopular(JSON.parse(check))
  }else{

    const api=await fetch('https://api.spoonacular.com/recipes/random?apiKey=4824df22799041578d0d806f52935936&number=9')
    const data= await api.json()  
    localStorage.setItem('popular',JSON.stringify(data.recipes))
    setPopular(data.recipes)    
  }     
  }
  return (
    <div>
       <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options={{
            perPage:4,
            arrows:false,
            pagination:false,
            drag:'free',
            gap:'2rem'
          }}>
      {popular.map(recipe=>{
      return(       
          <SplideSlide key={recipe.id}>
           <Card >
            <Link to={'/recipe/'+recipe.id}>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
              <Gradiant/>
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

const Wrapper = styled.div`
margin:4rem 0rem;
`
const Card= styled.div`
  min-height: 20rem;
  border-radius: 2rem;
  overflow: hidden;
  position:relative;
  img{
    border-radius: 2rem;
    position:absolute;
    left:0;
    width:100%;
    height:100%;
  }
  p{
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%,0);
    color: white;
    text-align: center;
    width: 100%;
    height: 40%;
    font-weight: 600;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
`;
const Gradiant=styled.div`
z-index: 3;
position: absolute;
width: 100%;
height: 100%;
background: linear-gradient(rgba(0,0,0,0),rgba(0, 0, 0, 0.5));
`
export default Popular