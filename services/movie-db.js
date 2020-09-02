const fetch = require('node-fetch')
const config = require('../config.js')

class MovieDatabaseService {
  async fetchResponse(endpoint) {
    const baseURL = 'https://api.themoviedb.org/3'
    const headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${config.movieDatabase.accessToken}`,
    }

    try {
      const response = await fetch(`${baseURL}/${endpoint}`, {
        headers,
      })
      const parsed = await response.json()
      return parsed
    } catch (e) {
      console.log(e)
      throw new Error(e)
    }
  }

  async getPopularMovies() {
    const urlString = 'movie/popular'
    return this.fetchResponse(urlString)
  }

  async searchMovies(query, page = 1) {
    if (!query) {
      throw new Error('No query')
    }

    const urlString = `search/movie?query=${query}&page=${page}`
    return this.fetchResponse(urlString)
  }

  async getMovieDetails(id) {
    console.log('id', id)
    const urlString = `movie/${id}`
    return this.fetchResponse(urlString)
  }
}

exports.service = MovieDatabaseService
