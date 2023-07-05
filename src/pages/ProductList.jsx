import React from 'react'
import Navbar from '../components/Navbar'
import { styled } from 'styled-components'
import Products from '../components/Products'

const Container =styled.div`
`

const Title=styled.h1`
  margin: 20px;
`

const FilterContainer=styled.div`
    display: flex;
    justify-content: space-between;
    margin: 10px;
`

const Filter=styled.div`
  margin: 20px;

`

const FilterText=styled.span`
  font-size: 20px;
  font-weight: 600;
`

const Select=styled.select`
  margin: 20px;
  padding: 10px;
`
const Option=styled.option`
  
`

const ProductList = () => {
  return (
    <Container>
      <Navbar/>
      <Title>Mobile Phones</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filters: </FilterText>
          <Select >
            <Option disabled selected>Categories</Option>
            <Option>Android</Option>
            <Option>Iphones</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Brands
            </Option>
            <Option>Samsung</Option>
            <Option>Apple</Option>
            <Option>One Plus</Option>
            <Option>Iqoo</Option>
            <Option>Realme</Option>
          </Select>
          
        </Filter>
        <Filter>
        <FilterText>Sort Products: </FilterText>
        <Select>
          <Option selected>Newest</Option>
          <Option>Price = Low to High</Option>
          <Option>Price = High to Low</Option>
        </Select>
        </Filter>
      </FilterContainer>
      <Products/>
    </Container>
  )
}

export default ProductList