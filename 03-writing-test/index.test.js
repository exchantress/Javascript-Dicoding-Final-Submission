import { test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

test('hasil benar', function () {
    //arrange 
    const a = 1;
    const b = 1;

    //action
    const hasilBenar = sum(a, b);

    //assert
    const ekspetasiHasil = 2;
    assert.equal(hasilBenar, ekspetasiHasil);
});

test('hasil salah jika numA bernilai string', function () {
    //arrange 
    const a = '10';
    const b = 1;

    //action
    const hasilBenar = sum(a, b);

    //assert
    const ekspetasiHasil = '101';
    assert.equal(hasilBenar, ekspetasiHasil);
});

test('hasil salah jika numB bernilai string', function () {
    //arrange 
    const a = 1;
    const b = '3';

    //action
    const hasilBenar = sum(a, b);

    //assert
    const ekspetasiHasil = '13';
    assert.equal(hasilBenar, ekspetasiHasil);
});