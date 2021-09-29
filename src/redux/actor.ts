import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { ActorType } from '@api/services/MovieDBService';

import type { RootState } from './store';

export interface ActorState {
  searching: boolean;
  actor: ActorType | null;
  error: {
    message: string;
  } | null;
}

const initialState: ActorState = {
  searching: false,
  actor: null,
  error: null,
};

export const actorSlice = createSlice({
  name: 'actor',
  initialState,
  reducers: {
    setActor: (state, action: PayloadAction<ActorState['actor']>) => {
      state.actor = action.payload;
    },
    setError: (state, action: PayloadAction<ActorState['error']>) => {
      state.error = action.payload;
    },
    setSearching: (state, action: PayloadAction<boolean>) => {
      state.searching = action.payload;
    },
  },
});

export const { setActor, setError, setSearching } = actorSlice.actions;

export const selectActor = (state: RootState) => state.actor;

export default actorSlice.reducer;
