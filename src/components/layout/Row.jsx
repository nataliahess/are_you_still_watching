import React from 'react'
import styled from 'styled-components'

function Row(props) {
  return <StyledRow>{props.children}</StyledRow>
}

const StyledRow = styled.div`
  @media screen and (min-width: 800px) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`
export default Row
