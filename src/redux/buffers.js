import { createAction, handleActions } from 'redux-actions';

import { createConstants } from 'utils/Redux';

export const path = 'buffers';

export const selectors = {
  getBufferById: (id, state) => (
    state[path].data[id]
  ),
  getBuffers: state => (
    state[path].list.map(id => selectors.getBufferById(id, state))
  ),
};

export const constants = createConstants([
  'BUFFER_ADD',
  'BUFFER_UPDATE',
  'BUFFER_REMOVE',
  'BUFFER_OPEN',
]);

export const actions = {
  addBuffer: createAction(constants.BUFFER_ADD),
  updateBuffer: createAction(constants.BUFFER_UPDATE),
  removeBuffer: createAction(constants.BUFFER_UPDATE),
  openBuffer: createAction(constants.BUFFER_UPDATE),
};

export const initialState = {
  data: {
    'demo': {
      id: 'demo',
      data: Uint8Array.of(42, 42, 56, 4, 42, 42, 56, 4, 42, 42, 56, 4, 42, 42, 56, 4),
      parserCode: "console.log('Not implemented yet');",
    },
  },
  list: ['demo'],
};

export const reducer = handleActions({
  [constants.BUFFER_ADD]: (state, { payload: buffer }) => ({
    ...state,
    data: {
      ...state.data,
      [buffer.id]: buffer,
    },
    list: [
      ...state.list,
      buffer.id,
    ],
  }),
}, initialState);
