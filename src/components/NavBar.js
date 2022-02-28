import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container, Flex, List } from '../Styled'
import { GiBookshelf } from 'react-icons/gi'


export const NavBar = () => {
  return (
    <Container>
      <Flex>
        <Flex>
          <GiBookshelf />
          <h1><Link to={'/'}>론리의 서재</Link></h1>
        </Flex>

          <List as={Flex}>
              <li><NavLink to='/'>신간리스트</NavLink></li>
              <li><NavLink to='/about'>베스트셀러</NavLink></li>
              <li><NavLink to='/week'>상세페이지</NavLink></li>
          </List>
      </Flex>
    </Container>
  )
}
