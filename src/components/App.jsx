import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Movies } from '../pages/Movies';
import {MoviesDetails} from '../pages/MoviesDetails'
import { Container, Header, Logo, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="movie icon">
          </span>{' '}
          Filmoteka
        </Logo>
        <nav>
          <Link to="/" end >Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<MoviesDetails />} />
      </Routes>
    </Container>
  );
};
