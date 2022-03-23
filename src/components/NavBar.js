import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Flex, List } from '../Styled'
import { GiBookshelf } from 'react-icons/gi'
import styled from 'styled-components'
import { searchSlide } from '../atom/atom'
import { useSetRecoilState } from 'recoil'

const Title = styled.div`
    padding: 0;
    margin-left: 12px;
    font-weight: 100;
    font-size: 32px;
    letter-spacing: -4px;
  & a {
    color: black;
    text-decoration: none;
}
`
const Input = styled.input`
  font-size: 14px;
  padding: 10px;
  background: whitesmoke;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }
`;

const Button = styled.button`
background-color: black;
  color: white;
  font-size: 14px;
  padding: 10px;
  border-radius: 3px;
  border: none;
  margin-left: 8px;
  cursor: pointer;
`

export const NavBar = () => {

  const [value, setValue] = useState('');
  
  const onChange = ({ target : { value }}) => setValue(value);
  const setSearch = useSetRecoilState(searchSlide);

  const onSubmit = (event) => {
    event.preventDefault();

    if (value == "") {
      return;
    }

    setSearch(value);
    setValue("");
  }
  return (
    <Container padding='18px 12px'>
      <Flex>
        <Flex align='flex-end'>
          <Flex>
            <GiBookshelf size='32px' color='blacks'/>
            <Title><Link to={'/'}>론리의 서재</Link></Title>
          </Flex>
          <Container margin='0' padding='0 0 4px 20px'>
            <List as={Flex}>
                <li><NavLink to='/'>신간리스트</NavLink></li>
                <li><NavLink to='/bestsell'>베스트셀러</NavLink></li>
                <li><NavLink to='/week'>상세페이지</NavLink></li>
            </List>
          </Container>
        </Flex>
          <form onSubmit={onSubmit}>
            <Input type="text" placeholder="검색하세요" onChange={onChange} value={value}/>
            <Button type='submit'>검색</Button>
          </form>
      </Flex>
    </Container>
  )
}
