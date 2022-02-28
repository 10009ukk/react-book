import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { List, Text } from '../Styled'

const Image = styled.img`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '200px'};
`
const Container = styled.div`
  width: 150px;
  height: 300px;
  position: relative;
  margin: 0 auto;
  & > a {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    color: gray;
  }
`

const Number = styled.div`
  width: 20px;
  height: 20px;
  text-align: center;
  line-height: 10px;

  position: absolute;
  top: -20px;
  left: -20px;

  font-size: 24px;
  font-weight: bold;
`

export const Book = ({ index, cover, title, author, publisher, pubDate, customerReviewRank, priceStandard, description, isbn13 }) => {
  
  return (
    <Container>
        <Link to={`/detail/${isbn13}`}>
            <Number>{index}</Number>
            <Image src={cover}/>
            <Text font='14px' color='black'>{title.length > 15 ? `${title.slice(0, 15)}...` : title}</Text>
            <List>
                <li>{author.length > 10 ? `${author.slice(0, 10)}...` : author}</li>
                <li>{publisher}</li>
                <li>{pubDate}</li>
            </List>
            <List>
                <li>{customerReviewRank}</li>
                <li>{priceStandard}</li>
            </List>
            <p>{description}</p>
        </Link>
    </Container>
  )
}

