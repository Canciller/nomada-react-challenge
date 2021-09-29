const url = process.env.REACT_APP_MOVIE_DB_IMAGE_URL;

export default function getMovieDBPictureURL(path?: string, width?: number) {
  return `${url}/${width !== undefined ? `w${width}` : 'original'}${path}`;
}
