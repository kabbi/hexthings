import { PropTypes } from 'react';

export const buffer = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  data: PropTypes.instanceOf(Uint8Array).isRequired,
  parserCode: PropTypes.string.isRequired,
  result: PropTypes.object,
});

export default {
  buffer,
};
