//Modules
//every file is a module
//modules - encapsulated code(only share minimum)
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-syntax')
console.log(data)

require('./7-mind-greande')
sayHi("susan");
sayHi(names.john);
sayHi(names.peter);
