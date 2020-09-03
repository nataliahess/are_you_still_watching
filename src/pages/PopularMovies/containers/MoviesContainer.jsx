import React, { useEffect, useState } from 'react'
import { Flex } from 'rebass'

import { debounce } from '../../../utils.js'

import PopularMoviesPage from '../PopularMoviesPage'

import HeaderTitle from '../../../components/HeaderTitle'
import PageWrapper from '../../../components/layout/PageWrapper'
import SearchBar from '../../../components/SearchBar'

const MoviesContainer = () => {
  const [popularMoviesList, setPopularMoviesList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [searchString, setSearchString] = useState('')
  const debouncedSearchString = debounce(searchString, 500)

  useEffect(() => {
    ;(async () => {
      try {
        const resp = await fetch('http://localhost:3000/api/movies/popular', {
          mode: 'cors',
        })
        const movies = await resp.json()
        setPopularMoviesList(movies.results)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [popularMoviesList.page])

  const search = async (e) => {
    if (e.key === 'Enter') {
      try {
        const response = await fetch(
          `http://localhost:3000/api/movies/search?q=${searchString}`
        )
        const movies = await response.json()
        setPopularMoviesList(movies.results)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
      }
    }
  }

  return isLoading ? null : (
    <PageWrapper>
      <Flex
        alignItems="center"
        flexWrap="wrap"
        justifyContent="space-between"
        mb={2}
      >
        <HeaderTitle />
        <SearchBar
          value={searchString}
          onChange={(e) => setSearchString(e.target.value)}
          onSubmit={debouncedSearchString && search}
        />
      </Flex>
      <PopularMoviesPage movies={popularMoviesList} />
    </PageWrapper>
  )
}

export default MoviesContainer
