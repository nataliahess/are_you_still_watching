const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const MovieDBService = require('./services/movie-db').service

const instantiateService = (req, res, next) => {
  if (!res.locals.movieService) {
    res.locals.movieService = new MovieDBService()
  }
  next()
}

app.use(instantiateService)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

app.use(express.static(path.join(__dirname, './build')))

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './build', 'index.html'))
)

app.get('/api/movies/popular', (req, res, next) => {
  const { movieService } = res.locals
  movieService
    .getPopularMovies()
    .then((resp) => {
      console.log('⏳ Getting a response...')
      res.json(resp)
    })
    .catch((e) => next(e))
})

app.get('/api/movie/:id', (req, res, next) => {
  const { id } = req.params
  const { movieService } = res.locals
  movieService
    .getMovieDetails(id)
    .then((resp) => {
      res.json(resp)
    })
    .catch((e) => next(e))
})

app.get('/api/movies/search', (req, res, next) => {
  const { q } = req.query
  const { movieService } = res.locals
  movieService
    .searchMovies(q)
    .then((resp) => res.json(resp))
    .catch((e) => next(e))
})

app.listen(port, () => console.log(`App listening at http://localhost:${port}`))
