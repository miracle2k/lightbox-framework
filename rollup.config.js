// rollup.config.js
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import generatePackageJson from 'rollup-plugin-generate-package-json'


export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es'
    },
    {
      format: 'cjs',
      file: 'dist/index.cjs.js',
    }
  ],
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfigOverride: {compilerOptions: { declaration: true }},
      // Needed because our rollup config includes unhashable elements, such as the copy plugin
      objectHashIgnoreUnknownHack: true
    }),
    postcss({
      plugins: [],
      minimize: true,
      sourceMap: 'inline',
      extract: 'dist/base.css'
    }),
    copy({
      targets: [
        { src: 'README.md', dest: 'dist' },
        { src: 'src/defaultStyle.css', dest: 'dist' },
      ]
    }),
    generatePackageJson({
      baseContents: (pkg) => ({
        ...pkg,
        scripts: {}
      })
    })
  ]
};