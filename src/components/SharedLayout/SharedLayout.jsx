import { Outlet } from "react-router-dom";
import { Container, Header, Logo, Link } from "./SharedLayout.styled";
import { Suspense } from "react";
import {Loader} from '../Loader/Loder'

export const SharedLayout = () => {
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
      <Suspense fallback={<Loader/>}>
        <Outlet />
        </Suspense>
    </Container>
  );
};