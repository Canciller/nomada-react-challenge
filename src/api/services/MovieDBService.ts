import { normalize } from 'normalizr';

import { movieDB } from '@config';

import ActorSchema from '../schemas/ActorSchema';

export type Actor = Partial<{
  adult: boolean;
  gender: number;
  id: string | number;
  name: string;
  popularity: number;
  profile_path: string;
}>;

export type Movie = Partial<{
  id: string | number;
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
  original_name: string;
  original_title: string;
}>;

export interface ActorsNormalizerResult {
  result: string | number;
  entities: {
    actors: {
      [key: string]: Actor;
    };
    movies: {
      [key: string]: Movie;
    };
  };
}

class MovieDBService {
  key: string;
  url: string;

  constructor() {
    this.url = movieDB.url;
    this.key = movieDB.key;
  }

  async searchPerson(query: string) {
    const res = await fetch(
      `${this.url}/search/person?api_key=${this.key}&query=${query}&language=es`,
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.status_message || res.statusText);

    if (data.results.length === 0) return null;

    const normalized: ActorsNormalizerResult = normalize(
      data.results[0],
      ActorSchema,
    );

    const id = normalized.result;
    const actor = normalized.entities.actors[id];

    return {
      actor,
      movies: normalized.entities.movies,
    };
  }
}

export default new MovieDBService();
