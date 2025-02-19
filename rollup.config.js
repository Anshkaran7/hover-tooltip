import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

export default {
  input: ['src/index.ts', 'src/index.js'],
  output: {
    dir: 'dist',
    format: 'esm',
    sourcemap: true
  },
  plugins: [
    peerDepsExternal(),
    resolve({
      extensions: ['.js', '.ts', '.jsx', '.tsx']
    }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.json',
      declaration: true,
      declarationDir: 'dist'
    })
  ]
}