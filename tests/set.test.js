import { set } from '../set.js';
import {strict as assert } from 'node: assert';
const obj = {};

// Тест 1: Установка значения в новое свойство
set (obj, 'key1', 'value');
assert.strictEqual( obj.key1, 'value','Функция работатет не верно');

// Тест 2: Попытка перезаписать существующее свойство
set (obj, 'key1', 'newValue');
assert.strictEqual( obj.key1, 'value', 'Функция работает не верно, она не должна перезаписывать уже имеющееся значение');

// Тест 3: Установить новое значение с в новое свойство
set (obj, 'key2', 'value2');
assert.strictEqual( obj.key2, 'value2','Функция должна устанавливать другие новые свойства');


console.log('Тесты пройдены')