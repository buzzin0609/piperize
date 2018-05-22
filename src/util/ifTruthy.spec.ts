import ifTruthy from './ifTruthy';
import * as sinon from 'sinon';

describe('ifTruthy(): ', function () {

    let stub;

    beforeEach(function () {
        stub = sinon.stub();
    });


    function truthyTest(value) {
        stub.returns(true);
        const cb = ifTruthy(stub);
        cb(value);
        expect(stub.called).toEqual(true);
    }

    function falsyTest(value) {
        const cb = ifTruthy(stub);
        cb(value);
        expect(stub.called).toEqual(false);
    }

    it('should trigger the passed callback if value passed to resolver is truthy', function () {
        truthyTest(true);
        truthyTest(function () {

        });
        truthyTest('foo');
        truthyTest(1);
    });

    it('should not trigger the passed callback if value passed to resolver is falsy', function () {
        falsyTest(false);
        falsyTest('');
        falsyTest(null);
        falsyTest(0);
        falsyTest(undefined);
    });

});