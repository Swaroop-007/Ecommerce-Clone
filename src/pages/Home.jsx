import React from 'react'
import Navbar from '../components/Navbar'
import CardOffer from '../components/CardOffer'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import { styled } from 'styled-components'


const Title=styled.h1`
  margin: 20px;
`


const Home = () => {
  return (
    <div>
        
        <Navbar/>
        <Slider/>
        <CardOffer/>
        <Title>Categories</Title>
        <Categories/>
        <Title>Popular Products</Title>
        <Products/>
    </div>
  )
}

export default Home