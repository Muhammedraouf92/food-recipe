import React from 'react'
import{FaPizzaSlice,FaHamburger} from 'react-icons/fa'
import{ GiNoodles , GiChopsticks } from 'react-icons/gi'
import styled from 'styled-components'
import{NavLink} from 'react-router-dom'

const Catagory = () => {
  return (
    <List>
        <Slink to={'/cuisine/Italian'}>
            < FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'/cuisine/American'}>
            < FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'/cuisine/Thai'}>
            < GiNoodles/>
            <h4>Thai</h4>
        </Slink >
        <Slink to={'/cuisine/Korean'}>
            < GiChopsticks/>
            <h4>Korean</h4>
        </Slink>
    </List>
  )
}

const List=styled.div`
display: flex;
justify-content: center;
margin: 2rem 0rem;
`
const Slink=styled(NavLink)`
flex-direction: column;
display: flex;
border-radius: 50%;
justify-content: center;
margin-right: 2rem;
align-items: center;
text-decoration: none;
background: linear-gradient(35deg,#494949,#313131);
width: 6rem;
height: 6rem;
cursor: pointer;
h4{
    color: wheat;
    font-size: 0.8rem;
  }
  svg{
    color: white;
    font-size: 1.5rem;
  }
  &.active{
    background: linear-gradient(to right,#f27121,#e94057);
    svg{
      color: white;
  
    }
    h4{
      color: white;
    }
  }
`
export default Catagory