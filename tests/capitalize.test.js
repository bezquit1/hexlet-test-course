import { capitalize } from '../capitalize.js';
import { strict as assert } from 'node:assert'; 

assert.strictEqual(capitalize(''), '');
assert.strictEqual(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');