import { configureStore } from '@reduxjs/toolkit';

import actorReducer from './actor';

const store = configureStore({
  reducer: {
    actor: actorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
