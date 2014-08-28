'use strict';
var rs = require('./randomString');
var args = process.argv.slice(2);
var result = rs.generate(args[0]);
console.log(result);
return result;
