import React from 'react'
import styled from 'styled-components'

function MovieCard(props) {
  return (
    <Card>
      <CardImage
        alt={`${props.title} movie poster`}
        src={props.backgroundImageUrl}
      />
    </Card>
  )
}

const Card = styled.div`
  width: 100%;
  background: none;
  box-sizing: border-box;
  padding: 0.5em 0.5em;
  transition: transform 0.5s;
  -webkit-transition: transform 0.5s;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    -webkit-transform: scale(1.1);
  }
`

const CardImage = styled.img`
  border-radius: 6px;
  &:hover {
    box-shadow: 0 0 11px #ccc;
  }
`

export default MovieCard
