'use strict';

/* jasmine specs for provider go here */

describe('provider', function () {
    beforeEach(module('validation.provider'));

    describe('setup Expression', function () {
        it('After setup, it should still be expression(Regex)', inject(function ($validation) {
            $validation.setupExpression({ huei: /^huei$/ });

            expect($validation.getExpression('huei')).toEqual(jasmine.any(RegExp));
        }));
    });

    describe('setup defaultMsg', function () {
        it('After setup, it should still be Msg', inject(function ($validation) {
            var obj = {
                huei: {
                    error: 'It\'s should be huei',
                    success: 'It\'s huei'
                }
            };

            $validation.setupDefaultMsg(obj);

            expect($validation.getDefaultMsg('huei')).toEqual(jasmine.any(Object));
            for (var key in $validation.getDefaultMsg('huei')) {
                expect($validation.getDefaultMsg('huei')[key]).toEqual(jasmine.any(String));
            }
        }));
    });

    describe('checkValid', function () {
        it('It should be Valid when start', inject(function ($validation) {
            expect($validation.checkValid()).toBe(true);
        }));
    });
});