import React from 'react'
import styled from 'styled-components'

function getColSize(size) {
  switch (size) {
    case 1:
      return '8%'
    case 2:
      return '15%'
    case 3:
      return '25%'
    case 4:
      return '33.3%'
    case 6:
      return '50%'
    case 8:
      return '66.7%'
    case 12:
      return '100%'
    default:
      return '100%'
  }
}

function Column(props) {
  return <StyledColumn {...props}>{props.children}</StyledColumn>
}

const StyledColumn = styled.div`
  flex-basis: 100%;

  @media screen and (min-width: 800px) {
    flex: 1;
    flex-basis: ${(props) => getColSize(props.size)};
  }
`

export default Column
