//use npm init -y, makes a package.json which contains some useful information about the project like dependencies
//use npm i packagename like bootstrap to install local dependencies
//use npm install -g packagename like nodemon to install global dependencies

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);

console.log(newItems);