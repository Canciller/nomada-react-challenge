import { useCallback } from 'react';

import AppService from '@api/services/AppService';
import { selectActor, setActor, setError, setSearching } from '@redux/actor';
import { useAppDispatch, useAppSelector } from '@redux/hooks';

export default function useApp() {
  const { actor, searching, error } = useAppSelector(selectActor);
  const dispatch = useAppDispatch();

  const search = useCallback(
    async (fileOrQuery: Blob | string) => {
      dispatch(setActor(null));
      dispatch(setSearching(true));

      let found = null;
      try {
        found = await AppService.search(fileOrQuery);
        if (!found) throw new Error('Actor not found');

        dispatch(setActor(found));
      } catch (e) {
        dispatch(setError(e as Error));
      }

      dispatch(setError(null));
      dispatch(setSearching(false));

      return found;
    },
    [dispatch],
  );

  return {
    searching,
    search,
    error,
    actor,
  };
}
