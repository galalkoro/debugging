'use strict';

function mystery(x) {
	if (typeof x === 'boolean') {
		throw new TypeError('x cannot be a boolean');
	}

	const booleaned = Boolean(x);
	const numbered = Number(booleaned);
	return numbered;
}

// write the expected return value

const returned1 = mystery(undefined);
const isTrue1 = returned1 === 0;
console.assert(isTrue1, 'Test 1');

const returned2 = mystery(null);
const isTrue2 = returned2 === 0;
console.assert(isTrue2, 'Test 2');

const returned3 = mystery('false');
const isTrue3 = returned3 === 1;
console.assert(isTrue3, 'Test 3');

const returned4 = mystery(''); // Number(0, -0, Undefined, "")->False Number(false)>0
const isTrue4 = returned4 === 0;
console.assert(isTrue4, 'Test 4');

const returned5 = mystery(0);
const isTrue5 = returned5 === 0;
console.assert(isTrue5, 'Test 5');

const returned6 = mystery('  '); //Number('')-> 0 Number('')->0
const isTrue6 = returned6 === 1;
console.assert(isTrue6, 'Test 6');

const returned7 = mystery(-1);
const isTrue7 = returned7 === 1;
console.assert(isTrue7, 'Test 7');

const returned8 = mystery(true);
const isTrue8 = returned8 === 'x cannot be a boolean';
console.assert(isTrue8, 'Test 8');

const returned9 = mystery(1);
const isTrue9 = returned9 === 1;
console.assert(isTrue9, 'Test 9');
