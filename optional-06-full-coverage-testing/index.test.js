import { test } from 'node:test';
import assert from 'node:assert';
import sum from './index.js';

//Uji yang benar
test('Hasil benar', function () {
    //Asign
    const a = 1;
    const b = 2;

    //Action
    const result = sum(a, b);

    //Assert
    const ekspetasiHasil = 3;
    assert.equal(result, ekspetasiHasil);
});

//Uji salah satu string
test('Hasil salah karena salah satu nilai berbeda tipe data', function () {
    //Asign
    const a = 1;
    const b = '2';

    //Action
    const result = sum(a, b);

    //Assert
    const ekspetasiHasil = 0;
    assert.equal(result, ekspetasiHasil);
});

//Uji keduanya berbeda tipe
test('Hasil salah karena kedua nilai beda tipe data dengan yang ada di sum()', function () {
    //Asign
    const a = true;
    const b = '2';

    //Action
    const result = sum(a, b);

    //Assert
    const ekspetasiHasil = 0;
    assert.equal(result, ekspetasiHasil);
});

//Uji keduanya lebih kecil dari 0
test('Hasil salah karena nilai dibawah atau lebih rendah dari 0', function () {
    //Asign
    const a = -1;
    const b = -10;

    //Action
    const result = sum(a, b);

    //Assert
    const ekspetasiHasil = 0;
    assert.equal(result, ekspetasiHasil);
});