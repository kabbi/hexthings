import { transform as babelTransform } from 'babel-core';
import es2015 from 'babel-preset-es2015';
import stage0 from 'babel-preset-stage-0';

export const transform = (code, pretty) => (
  babelTransform(code, {
    ast: false,
    babelrc: false,
    comments: pretty,
    compact: !pretty,
    filename: 'user.code.js',
    presets: [es2015, stage0],
  }).code
);
