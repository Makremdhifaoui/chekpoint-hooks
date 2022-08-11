import React from 'react'
import MovieCards from '../MovieCards/MovieCards'

const MovieList = ({movies,inputSearch , rating }) => {
  return (
    <div className='Movie'>
        {movies.filter(movie=>movie.title.toUpperCase().includes(inputSearch.toUpperCase())&& movie.rate >= rating ).map(el=> <MovieCards movie={el} key={el.id}/>)}
    </div>
  )
}

export default MovieList