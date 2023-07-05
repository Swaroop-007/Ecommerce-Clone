import React from 'react'
import styled from 'styled-components'

const Container=styled.div`
    flex: 1;
    min-width: 280px;
    margin: 60px;
    height: 350px;
    transition: box-shadow 0.5s, transform 0.3s ease;
    background-color:white;
    
    
    &:hover
    {
      box-shadow: 0px 0px 40px orange;
      transform: scale(1.1);
      cursor: pointer;
    }
    
    
`
const Image=styled.img`
    height: 75%;
    
    
    
    
`
const Title=styled.h2`
    padding: 5px;   
`
const Desc=styled.span`
    font-weight: 500;
    font-size: medium;
    padding: 8px;
`

const Product = ({item}) => {
  return (
    <Container>
        
        <Image src={item.img}/>
        <Title>{item.title}</Title>
        <Desc>{item.desc}</Desc>
        
    </Container>
  )
}

export default Product