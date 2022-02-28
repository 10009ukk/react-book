import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import { getBook } from '../api';
import { Container, List, Text, Image } from '../Styled';

export const Detail = () => {
    const { isbn } = useParams();
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbgoodaksejr0956001&itemIdType=ISBN13&ItemId=${isbn}&output=js&OptResult=ebookList,usedList,reviewList`, {
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               }
        })
        .then(({data}) => JSON.parse(data.slice(0, data.length - 1)))
        .then(({item}) => {
            console.log(item);
            setDatas(item);
            setLoading(false);
        }
        )
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

  return (
    <>
        {datas.map(({ cover, bookinfo, categoryName, title, author, publisher, pubDate, customerReviewRank, priceStandard, description, link }) => {
            return (
                <Container>
                    <Image src={cover}/>
                    <Text>{categoryName}</Text>
                    <Text font='14px' color='black'>{title}</Text>
                    {/* <List>
                        {bookinfo.map(book => {
                            return (<li>
                                {book.map(({desc, name}) => {
                                    <span>{desc} {name}</span>
                                })}
                            </li>)
                        })}
                    </List> */}
                    <List>
                        <li>{author}</li>
                        <li>{publisher}</li>
                        <li>{pubDate}</li>
                    </List>
                    <List>
                        <li>{customerReviewRank}</li>
                        <li>{priceStandard}</li>
                    </List>
                    <p>{description}</p>
                </Container>
            )
        })}
    </>
  )
}
