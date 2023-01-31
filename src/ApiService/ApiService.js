import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = 'ab57a8d74b0df3fdba80a78e42f32d17';

// Запрос популярных фильмов на главную страницу
export const fetchTrendingMovie = async page => {
  const url = `${BASE_URL}trending/movie/week?api_key=${API_KEY}&page=${page}`;
  const response = await axios.get(url);
  return response.data;
};

// Запрос детальной информации по id
export const getFilmDetails = async id => {
  const url = `${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};

// Запрос информации о актерах по id
export const getFilmCast = async id => {
  const url = `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(url);
  return response.data;
};
