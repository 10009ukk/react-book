import React from 'react'
import { useQuery } from 'react-query'
import { getBook } from '../api'
import { Book } from '../components/Book';
import { Container } from '../Styled';

export const About = () => {
  const { data, isLoading } = useQuery('bestseller', getBook);

  if (isLoading) {
    return <div>Loading...</div>
  }
  return (
    <Container>
        {data.map(({ cover, title, author, publisher, pubDate, customerReviewRank, priceStandard, priceSales, description, isbn13, link }, index) => {
          return (
            <Book
            index={index + 1}
            cover={cover} 
            title={title} 
            author={author} 
            publisher={publisher} 
            pubDate={pubDate} 
            customerReviewRank={customerReviewRank} 
            priceSales={priceSales}
            priceStandard={priceStandard} 
            description={description} 
            isbn13={isbn13}
            link={link}
            basic={false} />
          )
        })}
    </Container>
  )
}
