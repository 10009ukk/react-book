import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listPageReLoading } from '../atom/atom';
import { Flex, Grid } from '../Styled'
import { Book } from './Book';

export const BookList = () => {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [category, setCategory] = useRecoilState(listPageReLoading);

  const getBook = async () => {
    const json = await (
      await fetch(
        `https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgoodaksejr0956001&QueryType=ItemNewAll&MaxResults=8&start=1&SearchTarget=Book&Cover=Big&CategoryId=${category}&output=js&Version=20131101`
      )
    ).json();
    console.log(json.item);
    setData(json.item);
    setLoading(false);
  };
  useEffect(() => {
    setLoading(true);

    getBook();
  }, [category]);

  if (loading) {
    return <div>Loading...</div>
  }
  
  return (
    <Grid margin='48px 0'>
      {data.map(({cover, title, author, publisher, pubDate, customerReviewRank, priceStandard, description, isbn13 }, index) => {
        return (
          <Book
          index={index}
          cover={cover} 
          title={title} 
          author={author} 
          // publisher={publisher} 
          // pubDate={pubDate} 
          // customerReviewRank={customerReviewRank} 
          // priceStandard={priceStandard} 
          // description={description} 
          isbn13={isbn13} />
        )
      })}
    </Grid>
  )
}
