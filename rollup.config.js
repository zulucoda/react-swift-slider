// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/react-swift-slider/index.js',
  output: {
    file: 'lib/react-swift-slider.min.js',
    format: 'cjs',
  },
  plugins: [
    resolve(),
    babel({
      exclude: 'node_modules/**', // only transpile our source code
    }),
    commonjs(),
    terser(),
  ],
  external: ['styled-components', 'react', 'react-dom', 'prop-types'], // <-- suppresses the warning
};
