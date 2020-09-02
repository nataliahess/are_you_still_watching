import React from 'react'
import { Text } from 'rebass'

function Header(props) {
  return (
    <Text
      as="h1"
      fontFamily="Oswald"
      textAlign={props.textAlign}
      fontSize={[6, 7]}
      sx={{
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Text>
  )
}

export default Header
