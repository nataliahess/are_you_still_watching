import React from 'react'
import styled from 'styled-components'

import { POSTER_PLACEHOLDER_URL } from '../../../constants.js'

function MovieCard(props) {
  return (
    <Card>
      <CardImage
        alt={`${props.title} movie poster`}
        src={props.backgroundImageUrl || POSTER_PLACEHOLDER_URL}
      />
    </Card>
  )
}

const Card = styled.div`
  width: 100%;
  height: 100%;
  background: none;
  box-sizing: border-box;
  padding: 0.5em 0.5em;

  &:hover {
    cursor: pointer;
  }
`

const CardImage = styled.img`
  border-radius: 6px;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;
  &:hover {
    box-shadow: 0 0 11px #ccc;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

export default MovieCard
