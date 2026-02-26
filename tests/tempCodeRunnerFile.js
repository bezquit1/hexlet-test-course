import { set } from '../set';
const obj = {};

set (obj, 'key1', 'value');
if (obj.key1 !== 'value') {
    throw new Error ('Функция работает не верно')
}

set (obj, 'key1', 'newValue');
if (obj.key1 === 'newValue') {
    throw new Error ('Функция работает не верно')
}

console.log('Тесты пройдены')