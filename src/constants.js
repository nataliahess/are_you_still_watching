export const API_KEY = '84844da2322e8da09d7f5174e265554e'

export const BASE_URL = 'https://api.themoviedb.org/3/movie'

export const IMAGE_PATH = 'https://image.tmdb.org/t/p/w500/'

export const GENRES = Object.freeze({
  ACTION: 'action',
  COMEDY: 'comedy',
  DRAMA: 'drama',
  FANTASY: 'fantasy',
  HORROR: 'horror',
  ROMANCE: 'romance',
})

const { ACTION, COMEDY, DRAMA, FANTASY, HORROR, ROMANCE } = GENRES

export const GENRE_CATEGORIES = Object.freeze({
  [ACTION]: ['Action', 'Thriller'],
  [COMEDY]: ['Family', 'Animation', 'Music', 'Comedy'],
  [DRAMA]: ['Drama', 'Crime'],
  [FANTASY]: ['Fantasy', 'Adventure', 'Science Fiction'],
  [HORROR]: ['Horror'],
  [ROMANCE]: ['Romance'],
})

export const GENRE_COLORS = Object.freeze({
  RED: '#e84c3d',
  YELLOW: '#f1c50e',
  BLUE: '#2b7fb9',
  GREEN: '#27ae61',
  ORANGE: '#e77e23',
  PURPLE: '#8f44ad',
})
