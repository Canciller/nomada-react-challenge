import { movieDB } from '@config';

const url = movieDB.picturesUrl;

export default function getMovieDBPictureURL(path?: string, width?: number) {
  return `${url}/${width !== undefined ? `w${width}` : 'original'}${path}`;
}
