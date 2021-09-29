import { movieDB } from '@config';

export type ActorType = Partial<{
  adult: boolean;
  gender: number;
  id: number;
  known_for: Partial<{
    title: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    release_date: string;
  }>[];
  known_for_department: string;
  name: string;
  popularity: number;
  profile_path: string;
}>;

class MovieDBService {
  key: string;
  url: string;

  constructor() {
    this.url = movieDB.url;
    this.key = movieDB.key;
  }

  async searchPerson(query: string): Promise<ActorType | null> {
    const res = await fetch(
      `${this.url}/search/person?api_key=${this.key}&query=${query}&language=es`,
    );

    const data = await res.json();

    if (!res.ok) throw new Error(data.status_message || res.statusText);

    return data.results.length > 0 ? data.results[0] : null;
  }
}

export default new MovieDBService();
