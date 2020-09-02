import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'rebass'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Text from './typography/Text'

function Rating(props) {
  return (
    <>
      <IconWrapper>
        <FontAwesomeIcon icon={faStar} size="xs" />
      </IconWrapper>
      <Text>
        <b>{props.voteAverage}</b>
      </Text>
      <Box display="inline-block" ml={1}>
        <Text>/</Text>
      </Box>
      <Text>10</Text>
    </>
  )
}

const IconWrapper = styled.span`
  margin-right: 3px;
  display: inline-flex;
  color: #ffc741;
`

Rating.propTypes = {
  voteAverage: PropTypes.number.isRequired,
}

export default Rating
