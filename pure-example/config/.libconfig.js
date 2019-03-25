module.exports = {
  lib: ['src/packages/pure-fn'], // need babel files or dirs
  dontLib: [], // dont babel files or dirs
  copy: {
    'src/packages/pure-fn': '../src',
    'dist': '../lib',
    'dist/package.json': '../package.json',
  },
  delete: ['dist', '../lib/package.json'], // after copy builded, delete files
  package: {
    "main": "lib/index.js",
    // "types": "src/index.d.ts",
    "dependencies": {},
  },
  gitURL: 'github.com/ymzuiku/pure-fn',
};