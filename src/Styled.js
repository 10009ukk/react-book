import styled from "styled-components"

const Container = styled.nav`
  padding: ${props => props.padding || '8px 12px'};
  margin: ${props => props.margin || '0 108px'};
`

const Flex = styled.div`
  display: flex;
  justify-content: ${props => props.just || 'space-between'};
  align-items: ${props => props.align || 'center'};
`

const List = styled.ul`
  list-style: none;
  font-size: ${props => props.font || "14px"};
  padding: 0; 
  
  & > li a {
    padding: 4px 8px;
    text-decoration: none;
    color: ${props => props.color || "grey"};    
  }
  & > li a:hover {
    text-decoration: underline;
    color: ${props => props.hover || "black"}   
  }
`

const Text = styled.h5`
  font-size: ${props => props.font ||'14px'};
  color: ${props => props.color ||'grey'};
  margin: 0;
`

const Grid = styled.div`
  display: grid;
  grid-gap: 8px 8px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px 300px;

  margin: ${props => props.margin || '0'};
`

const Hover = styled.div`
  padding: ${props => props.padding || '6px 6px'};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const Image = styled.img`
  width: ${props => props.width || '150px'};
  height: ${props => props.height || '200px'};
  min-width: ${props => props.min || 'none'};
`

const Span = styled.span`
  font-size: ${props => props.font ||'14px'};
  color: ${props => props.color ||'grey'};
`

export { Container, Flex, List, Text, Grid, Hover, Image, Span }