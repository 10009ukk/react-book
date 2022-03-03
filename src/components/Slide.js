import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { searchSlide } from '../atom/atom';
import { Container, Text } from '../Styled';
import { Book } from './Book';


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Float = styled.div`
    float: left;
    margin: 0 80px;
`

export const Slide = () => {

    const [datas, setDatas] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const search = useRecoilValue(searchSlide);

    useEffect(() => {
        setIsLoading(true);
        
        axios.get(`https://cors-anywhere.herokuapp.com/http://www.aladin.co.kr/ttb/api/ItemSearch.aspx?ttbkey=ttbgoodaksejr0956001&Query=${search}&QueryType=Title&MaxResults=240&start=1&SearchTarget=Book&Cover=Big&output=js&Version=20131101`)
        .then(({ data: { item } }) => {
            
            const data = [];
    
            for (let i = 0; i < 24; i += 4) {
                const temp = item.slice(i, i + 4);
                data.push(temp);
            }
            console.log(data);
            setDatas(data);  
            setIsLoading(false);
        })
    }, [search]);

    if (isLoading) {
        return <div>Loading...</div>
    }

    return (
        <>
            <Text font='14px'>{search} 검색 결과</Text>
            <Slider {...settings}>
                {datas.map(data => {
                    return (
                        <Container margin='20px 0'>
                            {data.map(({cover, title, author, publisher, pubDate, customerReviewRank, priceStandard, description, isbn13 }) => {
                                return (
                                    <Float>
                                        <Book 
                                        cover={cover} 
                                        title={title} 
                                        author={author} 
                                        publisher={publisher} 
                                        pubDate={pubDate} 
                                        isbn13={isbn13} /> 
                                    </Float>
                                )
                            })}
                        </Container>
                    )
                })}
            </Slider>
        </>
  )
}
