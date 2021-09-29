import { schema } from 'normalizr';

import movie from './MovieSchema';

const actor = new schema.Entity('actors', {
  known_for: [movie],
});

export default actor;
