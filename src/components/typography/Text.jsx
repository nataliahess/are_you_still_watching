import React from 'react'
import PropTypes from 'prop-types'
import { Box, Text as RebassText } from 'rebass'

function Text(props) {
  return (
    <Box
      display={props.as === 'li' ? 'block' : 'inline-block'}
      mb={props.as === 'li' ? 2 : undefined}
    >
      <RebassText
        as={props.as || 'p'}
        fontFamily="Barlow Condensed"
        fontSize={3}
        textAlign={props.textAlign}
      >
        {props.children}
      </RebassText>
    </Box>
  )
}

Text.propTypes = {
  as: PropTypes.string,
  children: PropTypes.node.isRequired,
  textAlign: PropTypes.string,
}

export default Text
