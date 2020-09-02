import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './styles/App.css'

import MoviesContainer from './pages/PopularMovies/containers/MoviesContainer.jsx'
import MovieDetailsContainer from './pages/MovieDetails/containers/MovieDetailsContainer.jsx'

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/">
        <MoviesContainer />
      </Route>
      <Route path="/movie/:id">
        <MovieDetailsContainer />
      </Route>
    </BrowserRouter>
  )
}

export default App
