import ifFalsy from './ifFalsy';
import * as sinon from 'sinon';

describe('ifFalsy(): ', function () {
    let stub;

    beforeEach(function () {
        stub = sinon.stub();
    });

    function testFalsy(value, expected = true) {
        const cb = ifFalsy(stub);
        cb(value);
        expect(stub.called).toEqual(expected);
    }


    it('should run the callback if value passed in is falsy', function () {
        testFalsy(null);
        testFalsy(0);
        testFalsy('');
        testFalsy(undefined);
    });

    it('should not run the callback if value passed in is truthy', function () {
        testFalsy(1, false);
        testFalsy('test', false);
        testFalsy(() => {}, false);
    });
});