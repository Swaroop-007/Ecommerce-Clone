import React from 'react'
import { styled } from 'styled-components'
import Navbar from '../components/Navbar'
import S23U from '../datasets/S23 Ultra/1_black.jpg'
import { Add, Remove } from '@mui/icons-material'

const Container=styled.div`
    
`
const Wrapper=styled.div`
  padding: 50px;
  display: flex;
`

const ImgContainer=styled.div`
  flex: 1;
`
const Image=styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;

`

const InfoContainer=styled.div`
  flex:1;
  padding: 0px 50px;
`

const Title=styled.h1`
  font-weight: 200;
`
const Desc=styled.p`
  margin: 20px 0px;
`
const Price =styled.span`
  font-weight: 100;
  font-size: 40px;
`

const FilterContainer=styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  &:hover{
      background-color: #f4f8f7;
  }
`;




const SingleProduct = () => {
  return (
    <Container>
      <Navbar />
      <Wrapper>
        <ImgContainer>
          <Image src={S23U} />
        </ImgContainer>
        <InfoContainer>
        <Title>Samsung Galaxy S23 Ultra 5G</Title>
            <Desc>
              17.27 cm(6.8 inch) Super Amoled Quad HD+ Display.<br/>
              12GB Ram with 256 GB/512 GB/1 TB storage.<br/>
              5000 mAh Lithium Ion Battery.<br/>
              200MP+12MP+10MP+10MP|12MP Front Facing Camera.<br/>
              Qualcomm Snapdragon 8Gen 2 Processor
            </Desc>
            <Price>{'\u20B9'} 1,24,999</Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="wheat" />
                <FilterColor color="darkgreen" />
                <FilterColor color="black" />
              </Filter>
              <Filter>
                <FilterTitle>Size</FilterTitle>
                <FilterSize>
                  <FilterSizeOption>128 GB</FilterSizeOption>
                  <FilterSizeOption>256 GB</FilterSizeOption>
                  <FilterSizeOption>512 GB</FilterSizeOption>
                  <FilterSizeOption>1 TB</FilterSizeOption>
                  
                </FilterSize>
                </Filter>
              </FilterContainer>
              <AddContainer>
                <AmountContainer>
                  <Remove/>
                  <Amount>1</Amount>
                  <Add/>
                </AmountContainer>
                <Button>ADD TO CART</Button>
              </AddContainer>
        </InfoContainer>
      </Wrapper>
    </Container>
  )
}

export default SingleProduct