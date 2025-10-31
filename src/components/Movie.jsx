import React from 'react';
import { Link } from 'react-router-dom';

const Movie = ({ title, year, summary, poster, genres }) => {
  return (
    <Link 
      to={'/detail'} 
      state={{ title, year, summary, poster, genres }}
    >
      <div className='movie'>
        <img src={poster} alt={title} title={title} />
        <div className='movie_data'>
          <h3 
            className='movie_title'
          >{title}</h3>
          <h5 className='movie_year'>{year}</h5>
          <ul className='movie_genres'>
            {
              genres.map(genre => (
                <li className='movie_genre' key={genre}>{genre}</li>
              ))
            }
          </ul>
          <p className='movie_summary'>{summary}</p>
        </div>
      </div>
    </Link>
  )
}

export default Movie;