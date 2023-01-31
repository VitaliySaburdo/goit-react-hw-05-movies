import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import { MoviesDetails } from '../pages/MoviesDetails';
import { Cast } from './Cast/Cast';
import {Reviews} from './Reviews/Reviews'
import { Container, Header, Logo, Link } from './App.styled';


export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="movie icon">Filmoteka</span> 
        </Logo>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </Container>
  );
};
