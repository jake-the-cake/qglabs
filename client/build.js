import { buildSync } from 'esbuild'

buildSync({
  entryPoints: [ './src/index.tsx' ],
  bundle: true,
  minify: false,
  sourcemap: true,
  target: [ 'chrome58', 'firefox57', 'safari11', 'edge16' ],
  outfile: './public/dist/bundle.js'
})