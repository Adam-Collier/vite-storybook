const { rmdir } = require('fs/promises');
const { build } = require('esbuild');

// delete everything in the dist dir
rmdir('dist', { recursive: true });

// build the esm file
build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  format: 'esm',
  outfile: 'dist/index.esm.js',
  external: ['react', 'react-dom', 'styled-components', 'prop-types'],
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.DEBUG': 'false',
  },
}).catch(() => process.exit(1));

// build the common js file

build({
  entryPoints: ['src/index.jsx'],
  bundle: true,
  platform: 'node',
  outfile: 'dist/index.cjs.js',
  external: ['react', 'react-dom', 'styled-components', 'prop-types'],
  minify: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.DEBUG': 'false',
  },
}).catch(() => process.exit(1));
