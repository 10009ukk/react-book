import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useSetRecoilState } from 'recoil'
import { getBook, getBookList } from '../api'
import { listPageReLoading } from '../atom/atom'
import { Book } from '../components/Book'
import { BookList } from '../components/BookList'
import { Slide } from '../components/Slide'
import { Container, Grid, Text, Flex, List, Hover } from '../Styled'

const categorys = [{
  key: 1,
  title: '소설'
}, {
  key: 336,
  title: '자기계발'
}, {
  key: 55889,
  title: '에세이'
}, {
  key: 170,
  title: '경제'
}, {
  key: 987,
  title: '과학'
}, {
  key: 74,
  title: '역사'
}]

export const Home = () => {
  const setCategory = useSetRecoilState(listPageReLoading);

  return (
    <>
    <Container>
      <Slide />
    </Container>
      <Container padding='32px 0'>
        <Flex>
            {categorys.map(({key, title}) => {
              return (
                <Hover onClick={() => setCategory(key)}>
                  <Text>{title}</Text>
                </Hover>
              )
            })}
        </Flex>
      </Container>
      <Container>
        <BookList />
      </Container>
    </>
  )
}