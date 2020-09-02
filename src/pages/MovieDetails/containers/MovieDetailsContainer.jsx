import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IMAGE_PATH } from '../../../constants.js'

import MovieDetailsPage from '../MovieDetailsPage'

function MovieDetailsContainer() {
  const { id } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [movieDetails, setMovieDetails] = useState({})

  useEffect(() => {
    ;(async () => {
      const response = await fetch(`http://localhost:3000/api/movie/${id}`)
      const movieInfo = await response.json()
      setMovieDetails(movieInfo)
      setIsLoading(false)
    })()
  }, [movieDetails.id])

  const {
    budget,
    genres,
    original_language,
    overview,
    production_companies,
    backdrop_path,
    release_date,
    runtime,
    title,
    vote_average,
  } = movieDetails

  return isLoading ? null : (
    <MovieDetailsPage
      budget={budget}
      genres={genres}
      language={original_language}
      overview={overview}
      productionCompanies={production_companies}
      backdropUrl={`${IMAGE_PATH}${backdrop_path}`}
      releaseDate={release_date}
      runtime={runtime}
      title={title}
      voteAverage={vote_average}
    />
  )
}

export default MovieDetailsContainer
