const fs = require('fs-extra');
const concat = require('concat');
(async function build() {
  const files = [
    './dist/angularEight/runtime-es2015.js',
    './dist/angularEight/polyfills-es2015.js',
    './dist/angularEight/scripts.js',
    './dist/angularEight/main-es2015.js',
  ]
  await fs.ensureDir('elements')
  await concat(files, 'elements/elements.js');
  await fs.copyFile('./dist/angularEight/styles.css', 'elements/styles.css')

})()