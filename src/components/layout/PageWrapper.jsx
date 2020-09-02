import React from 'react'
import styled from 'styled-components'

function PageWrapper(props) {
  return <StyledWrapper>{props.children}</StyledWrapper>
}

const StyledWrapper = styled.div`
  padding: 2em 5em;

  @media screen and (max-width: 600px) {
    padding: 1.5em;
  }
`

export default PageWrapper
