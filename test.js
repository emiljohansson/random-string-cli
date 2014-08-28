'use strict';
var test = require('../unit-test-module'),
    rs = require('./randomString');

var i = 20;
do {
    test.assertEqual(rs.generate(i).length, i, 'set length');
} while (i-- && i > 0);
test.assertEqual(rs.generate().length, 10, 'default length');
test.assertEqual(rs.generate(0).length, 10, 'default length');
test.assertEqual(rs.generate(1001).length, 1000, 'max length');
test.assertNotEqual(rs.generate().length, 11, 'default length');
