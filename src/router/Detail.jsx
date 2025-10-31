import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 30px; background-color: #fff; border: 2px solid orange; outline: none; border-radius: 7px; margin-top: 30px; transition: .5s;
  &:hover {
    background-color: orange; color: #333; border-color: #fff;
  }
`;

const Detail = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { title, year, summary, poster, genres } = location.state;
  const goBackHandler = () => {
    navigate(-1, {replace : true})
  };

  return (
    <div className='movie_detail inner'>
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
      <Button onClick={goBackHandler}>뒤로가기</Button>
    </div>
  )
}

export default Detail;