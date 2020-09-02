import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Box } from 'rebass'

import Text from './typography/Text'

import { GENRE_CATEGORIES, GENRE_COLORS, GENRES } from '../constants'

function Badge(props) {
  return (
    <StyledBadge {...props}>
      <Box py={0.5} px={2}>
        <Text>{props.genre}</Text>
      </Box>
    </StyledBadge>
  )
}

const { RED, YELLOW, BLUE, GREEN, ORANGE, PURPLE } = GENRE_COLORS
const { ACTION, COMEDY, DRAMA, FANTASY, HORROR, ROMANCE } = GENRES

const GENRE_TO_BADGE_MAP = {
  [ACTION]: {
    color: RED,
  },
  [COMEDY]: {
    color: YELLOW,
  },
  [DRAMA]: { color: BLUE },
  [FANTASY]: { color: GREEN },
  [HORROR]: { color: ORANGE },
  [ROMANCE]: { color: PURPLE },
}

const getGenreBadgeColor = (genre) => {
  for (const [key, value] of Object.entries(GENRE_CATEGORIES)) {
    if (value.includes(genre)) return GENRE_TO_BADGE_MAP[key].color
  }
}

const StyledBadge = styled.div`
  background-color: ${(props) => getGenreBadgeColor(props.genre)};
  color: #141414;
  border-radius: 6px;
  width: fit-content;
  display: inline-block;
  margin-right: 0.5em;
`

Badge.propTypes = {
  genre: PropTypes.string.isRequired,
}

export default Badge
