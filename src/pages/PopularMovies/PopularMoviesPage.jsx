import React from 'react'
import { Link } from 'react-router-dom'

import MovieCard from './components/MovieCard'

import { IMAGE_PATH } from '../../constants.js'

import Column from '../../components/layout/Column'
import Row from '../../components/layout/Row'

function PopularMoviesPage(props) {
  return (
    <>
      <Row>
        {props.movies.map((movie) => (
          <Column key={movie.id} size={3}>
            <Link to={`/movie/${movie.id}`}>
              <MovieCard
                title={movie.title}
                releaseDate={movie.release_date}
                voteAverage={movie.vote_average}
                backgroundImageUrl={`${IMAGE_PATH}${movie.poster_path}`}
              />
            </Link>
          </Column>
        ))}
      </Row>
    </>
  )
}

export default PopularMoviesPage
