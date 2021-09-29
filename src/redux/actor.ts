/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Actor, Movie } from '@api/services/MovieDBService';

import type { RootState } from './store';

export interface ActorState {
  searching: boolean;
  actor: Actor | null;
  movies: {
    [key: string]: Movie;
  };
  error: {
    message: string;
  } | null;
}

const initialState: ActorState = {
  searching: false,
  actor: null,
  error: null,
  movies: {},
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    setActorAndMovies: (state, action: any) => {
      state.actor = action.payload.actor;
      state.movies = action.payload.movies;
    },
    setError: (state, action: PayloadAction<ActorState['error']>) => {
      state.error = action.payload;
    },
    setSearching: (state, action: PayloadAction<boolean>) => {
      state.searching = action.payload;
    },
  },
});

export const { setActorAndMovies, setError, setSearching } = actorSlice.actions;

export const selectActor = (state: RootState) => state.actor;

export default actorSlice.reducer;
