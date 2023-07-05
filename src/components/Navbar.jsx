import { PersonSharp, Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'


const Wrapper=styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const Container= styled.div`
  height: 60px;
  background-color: #11033ac5;
  
`
const Left=styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 30px;
  align-items: end;
  color: aliceblue;
`
const Center=styled.div`
  flex: 1;
`

const SearchContainer=styled.div`
  
  display: flex;
  align-items: center;
  height: 30px;
`
const Input =styled.input`
  border: none;
  outline: none;
  border-radius: 10px 0px 0px 10px;
  width: 90%;
  flex: 10;
  height: 26px;
  padding-left: 10px;
  font-weight: 400;
  
`
const Logocontainer=styled.div`
  background-color:wheat;
  flex: 1;
  border: none;
  border-radius: 0px 10px 10px 0px;
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: orange;
  }

`

const Right=styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`
const MenuItem = styled.div`
  font-size: 16px;
  cursor: pointer;
  margin-left: 25px;
`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>PhoneX</Left>
        <Center>
          <SearchContainer>
            <Input/>
            <Logocontainer>
              <Search />
            </Logocontainer>
          </SearchContainer>
        </Center>
        <Right>
          <MenuItem>
            <Badge badgeContent={1} color="primary">
                <PersonSharp style={{color:"white"}}/>
            </Badge>
          </MenuItem>
          <MenuItem>
          <Badge badgeContent={1} color="primary">
                <ShoppingCartOutlined style={{color:"white"}}/>
          </Badge>
          </MenuItem>  
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar