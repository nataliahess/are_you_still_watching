import React from 'react'
import styled from 'styled-components'

function FlexBox(props) {
  return <StyledFlexBox {...props} />
}

export default FlexBox

const StyledFlexBox = styled.div`
  align-content: ${(props) => props.alignContent};
  align-items: ${(props) => props.alignItems};
  align-self: ${(props) => props.alignSelf};
  display: ${(props) => props.display};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  justify-content: ${(props) => props.justifyContent};
  overflow: ${(props) => props.overflow};
  position: ${(props) => props.position};
  text-align: ${(props) => props.textAlign};
  vertical-align: ${(props) => props.verticalAlign};
  flex-basis: ${(props) => props.flexBasis};
`
