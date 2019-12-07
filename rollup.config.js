// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss'


export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'cjs'
  },
  plugins: [
    typescript({
      tsconfigOverride: {compilerOptions: { declaration: true }}
    }),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
      extract: true
    }),
  ]
};