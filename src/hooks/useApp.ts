import { useCallback } from 'react';

import AppService from '@api/services/AppService';
import {
  selectActor,
  setActorAndMovies,
  setError,
  setSearching,
} from '@redux/actor';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

export default function useApp() {
  const { actor, searching, error, movies } = useAppSelector(selectActor);
  const dispatch = useAppDispatch();

  const search = useCallback(
    async (fileOrQuery: Blob | string) => {
      dispatch(
        setActorAndMovies({
          actor: null,
          movies: null,
        }),
      );
      dispatch(setSearching(true));

      let found = null;
      try {
        found = await AppService.search(fileOrQuery);
        if (!found) throw new Error('Actor not found');

        dispatch(setActorAndMovies(found));
      } catch (e) {
        if (e instanceof Error)
          dispatch(
            setError({
              message: e.message,
            }),
          );
        else
          dispatch(
            setError({
              message: 'Ha ocurrido un error',
            }),
          );
      }

      dispatch(setError(null));
      dispatch(setSearching(false));

      return found?.actor;
    },
    [dispatch],
  );

  return {
    searching,
    search,
    error,
    actor,
    movies,
  };
}
