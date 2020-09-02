import React from 'react'
import { Text } from 'rebass'

function Subheading(props) {
  return (
    <Text
      as="h2"
      fontFamily="Montserrat"
      fontSize={[3, 4]}
      textAlign={props.textAlign}
      sx={{
        textTransform: 'uppercase',
      }}
    >
      {props.children}
    </Text>
  )
}

export default Subheading
