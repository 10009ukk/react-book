import React from 'react'
import { Link } from 'react-router-dom'
import styled from "styled-components"
import { List, Text, Image, Span, Flex, Container } from '../Styled'

const Contain = styled.div`
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

const As = styled.div`
  position: relative;
  margin: 48px 0;
  & a{
    color: grey;
    text-decoration: none;
  }
  & span {
    padding: 8px;
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

export const Book = ({ index, cover, title, author, publisher, pubDate, customerReviewRank, priceSales, priceStandard, description, isbn13, link, basic=true }) => {
  
  return (
          <>
            {basic ? (
              
              <Contain>
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
              </Contain>
              
            ) : (
              <As>
                <Link to={`/detail/${isbn13}`}>
                <Number>{index}</Number>
                <Flex just='none'>
                  <Image src={cover} min='150px'/>
                  <Container padding='0' margin='0 12px'>
                    <Text>{title}</Text>
                    <List>
                        <Span>{author} 저</Span>
                        <Span>|</Span>
                        <Span>{publisher}</Span>
                        <Span>|</Span>
                        <Span>{pubDate}</Span>
                    </List>
                    <List>
                        <Span>별점 {customerReviewRank}</Span>
                        <Span>{priceSales}</Span>
                        <Span>{priceStandard}</Span>
                    </List>
                    <p>{description}</p>
                  </Container>
                </Flex>
                </Link>
              </As>
            )}
        </>
  )
}

