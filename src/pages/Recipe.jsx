import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const Recipe = () => {
    let params = useParams()
    const [active, setActive] = useState('Instructions')
    const [detail, setDetail] = useState({})
    const fetchDetails= async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${params.id}/information?apiKey=4824df22799041578d0d806f52935936`)
    const DetailData=await data.json()
    setDetail(DetailData)
}
console.log(detail)
useEffect(()=>{
    fetchDetails()
},[params.id])
  
    return (
    <DetailWrapper>
        <div>
            <h2> {detail.title}</h2>
            <img src={detail.image} alt="" />        
        </div>
        <Info>
            <Button className={active==='Instructions'&&'active'}
             onClick={()=>setActive('Instructions')}>Instructions</Button>
            <Button className={active==='Ingredients'&&'active'}
            onClick={()=>setActive('Ingredients')}>Ingredients</Button>
        {active==='Instructions'&&(

        <div>
            <h4 dangerouslySetInnerHTML={{__html:detail.summary}}></h4>
            <h4 dangerouslySetInnerHTML={{__html:detail.instructions}}></h4>
        </div>
        )}
        {active==='Ingredients'&&(

        <ul>
            {detail.extendedIngredients.map((item)=>{
                return(
                    <li key={item.id}>{item.original}</li>
                )
            })}
        </ul>
        )}
        </Info>
        
    </DetailWrapper>
  )
}
const DetailWrapper=styled.div`
margin-top:3rem;
margin-bottom: 5rem;
display: flex;
    .active{
        background: linear-gradient(35deg,#494949,#313131);
        color: white;
    }
    h2{
        margin-bottom: 2rem;
      }
      li{
        font-size: 1.2rem;
        line-height: 2.5rem;
      }
      ul{
        margin-top: 2rem;
      }
      h4{
        margin-top:1rem;
       font-height:1.7rem;
       font-size:1rem;
      }

`
const Button =styled.button`
padding: 1rem 2rem;
  color: #313131;
  background-color: white;
  border: 2px solid black;
  margin-right: 2px;
  font-weight: 600;

  

`
const Info = styled.div`
margin-left: 5rem;

`
export default Recipe