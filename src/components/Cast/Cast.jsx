import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmCast } from '../../ApiService/ApiService';
import { Box } from './Cast.styled'
import noImg from '../../images/No-Image-200x300.png';
import PropTypes from 'prop-types';


const Cast = () => {
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
  }, [id]);

  if (!cast) return;

  return (

    <div>
      <Box>
        {cast.map(({ id, profile_path, name, character }) => (
          
          <li key={id}>
            <img
              src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : noImg}
              alt={name}
              width="105"
              height="158"
            />
            <p>{name}</p>
            <p>{character}</p>
          </li>
        ))}
      </Box>
    </div>
  );
};

export default Cast

Cast.prototype = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.string,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  )
}