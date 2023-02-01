import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from '../../ApiService/ApiService';

export const Reviews = () => {
  const { id } = useParams();
  const [review, setReview] = useState([]);


  useEffect(() => {
    const APIfetchMovieReviews = async id => {
      try {
        const { results } = await getFilmReviews(id);
        setReview(results);
        if (results.length === 0) {
          return 'aslkdjkjadk'
        }
      } catch (error) {
        console.log(error);
      }
    };
    APIfetchMovieReviews(id);
  }, [id]);

  if (!review) return;

  return (
     review.length === 0 ? (<p>We don't have any reviews for this movie</p>) :
    (<div>
      <ul>
        {review.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </div>)
  );
};
