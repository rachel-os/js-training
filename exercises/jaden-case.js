/*'use strict'

import { strict } from "assert";
import { cpus } from "os";

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code :
function jadenCase(str) 
{
  str = str.split(" ");
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }
  return str.join(" ");
}


//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, 'function')
assert.strictEqual(jadenCase('zap jow'), 'Zap Jow')

// End of tests */