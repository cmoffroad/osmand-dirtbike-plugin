const pkg = require('../package.json');

const target = `${pkg.name}.osf`;

console.log(`rm -f ./dist/${target}`);
console.log(`cd ./src && zip -x **/.DS_Store -x .DS_Store -r ../dist/${target} .`);