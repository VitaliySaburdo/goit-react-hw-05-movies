import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../../ApiService/ApiService';
import {Box} from './Cast.styled'

export const Cast = () => {
  const { id } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const APIfetchMovieCast = async id => {
      try {
        const { cast } = await getFilmCast(id);
        setCast(cast);
      } catch (error) {
        console.log(error);
      }
    };
    APIfetchMovieCast(id);
  }, [id, cast]);

  if (!cast) return;

  return (
    <div>
      <Box>
        {cast.map(({ id, profile_path, name, character }) => (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={name}
              width="80"
              height="100"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </Box>
    </div>
  );
};
