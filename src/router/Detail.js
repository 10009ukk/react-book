import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom'
import styled from 'styled-components';
import { getBook } from '../api';
import { Container, List, Text, Image, Flex } from '../Styled';


const Align = styled.div`
    padding: 40px 0 0 40px;
    height: 260px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    & li {
        padding: 4px 12px;
        font-size: 18px;
    }
`

const Buy = styled.button`
    padding: 12px;
    outline: none;
    border: none;
    background-color: grey;
`

export const Detail = () => {
    const { isbn } = useParams();
    const [datas, setDatas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/https://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttbgoodaksejr0956001&itemIdType=ISBN13&ItemId=${isbn}&Cover=Big&output=js&OptResult=ebookList,usedList,reviewList`, {
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
        {datas.map(({ cover, bookinfo, categoryName, title, author, publisher, pubDate, customerReviewRank, priceStandard, priceSales, description, isbn13, link }) => {
            return (
                <Container>
                    <Text font='12px'>{categoryName}</Text>
                    <Text font='32px' color='black'>{title}</Text>
                    {/* <List>
                        {bookinfo.map(book => {
                            return (<li>
                                {book.map(({desc, name}) => {
                                    <span>{desc} {name}</span>
                                })}
                                </li>)
                            })}
                        </List> */}
                        <Container padding='0' margin='8px 0 54px 0'>
                            <Flex just='none'>
                                <Image src={cover} width='200px' height='300px'/>
                                <Align>
                                    <Flex as={List} just='none'>
                                        <li>별점 {customerReviewRank}</li>
                                    </Flex>
                                    <Flex as={List} just='none'>
                                        <li>{author}</li>
                                        <li>{publisher}</li>
                                        <li>{pubDate}</li>
                                    </Flex>
                                    <Flex as={List} just='none'>
                                        <li>정가 {priceStandard}</li>
                                        <li>할인가 {priceSales}</li>
                                    </Flex>
                                    <Buy><a href={link} target="_blank">구매 페이지</a></Buy>
                                </Align>
                            </Flex>
                        </Container>
                    {bookinfo.toc}
                    <p>{description}</p>
                </Container>
            )
        })}
    </>
  )
}
