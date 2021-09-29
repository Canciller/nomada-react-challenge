if (!process.env.REACT_APP_NOMADA_URL)
  throw new Error('REACT_APP_NOMADA_URL not set');

if (!process.env.REACT_APP_NOMADA_KEY)
  throw new Error('REACT_APP_NOMADA_KEY not set');

if (!process.env.REACT_APP_MOVIE_DB_URL)
  throw new Error('REACT_APP_MOVIE_DB_URL not set');

if (!process.env.REACT_APP_MOVIE_DB_PICTURES_URL)
  throw new Error('REACT_APP_MOVIE_DB_PICTURES_URL not set');

if (!process.env.REACT_APP_MOVIE_DB_KEY)
  throw new Error('REACT_APP_MOVIE_DB_KEY not set');

const config = {
  nomada: {
    url: process.env.REACT_APP_NOMADA_URL as string,
    key: process.env.REACT_APP_NOMADA_KEY as string,
  },
  movieDB: {
    url: process.env.REACT_APP_MOVIE_DB_URL as string,
    picturesUrl: process.env.REACT_APP_MOVIE_DB_PICTURES_URL as string,
    key: process.env.REACT_APP_MOVIE_DB_KEY as string,
  },
};

export const { nomada, movieDB } = config;
