import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../App.css';
import Movie from '../components/Movie';

const Home = () => {
  const [state, setState] = useState({
    isLoading : true,
    movies : []
  });

  const getMovies = async () => {
    const {
      data : {
        data : {
          movies
        }
      }
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=rating');
    // console.log('movies : ' , movies);
    setState({ movies, isLoading : false });
  };
  useEffect(() => {
    getMovies();
  },[]);

  const { isLoading, movies } = state;
  return (
    <section className='container inner'>
      <h1>YTS Movie App</h1>
      {
        isLoading 
        ? (
            <div className='loader'>
              <p className='loader_text'>loading...</p>
            </div>
        ) : (
          <div className='movies'>
            {
              movies.map(movie => {
                return <Movie 
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                />
              })
            }
          </div>
        )
      }
    </section>
  );
}

export default Home;
