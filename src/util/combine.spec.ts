/**
 * Test suite for combine module
 */

import combine from './combine';
import * as sinon from 'sinon';

describe('combine:', function () {

    let stub1;
    let stub2;

    beforeEach(function () {
        stub1 = sinon.stub().returns({foo: 'bar'});
        stub2 = sinon.stub().returns({bar: 'foo'});
    });

    it('should call each callback', function () {
        combine(stub1, stub2)(3);

        expect(stub1.called).toBeTruthy();
        expect(stub2.called).toBeTruthy();

    });

    it('should pass the initial inputs through to each callback', function () {
        combine(stub1, stub2)(3);

        expect(stub1.args[0][0]).toEqual(3);
        expect(stub2.args[0][0]).toEqual(3);
    });

    it('should error if a callback doesnt return an object', function () {

        stub1.returns(1);
        stub2.returns(2);

        expect(() => combine(stub1, stub2)(3)).toThrow();
    });

    it('should finally resolve to an object that combines the return values of the other callbacks', function () {
        const result = combine(stub1, stub2)(3);
        const expected = {foo: 'bar', bar: 'foo'};

        expect(result).toEqual(expected);
    });

    it('will combine larger objects into one', function () {
        const obj1 = {
            foo: {
                bar: 'fizz',
                fizz: {
                    buzz: 'foo'
                }
            }
        };
        const obj2 = {
            bar: {
                foo: 'haz',
                buzz: {
                    fizz: 'bar'
                }
            }
        };

        stub1.returns(obj1);
        stub2.returns(obj2);
        const result = combine(
            stub1,
            stub2
        )(10);
        const expected = {
            ...obj1,
            ...obj2
        };

        expect(result).toEqual(expected);
    });

    it('should combine multiple combine calls into one object', function () {
        const first = value => ({foo: value});
        const second = value => ({bar: value});
        const third = value => ({fizz: value});
        const forth = value => ({baz: value});
        const value = combine(
            combine(
                first,
                second
            ),
            combine(
                third,
                forth
            )
        )('buzz');

        expect(value).toEqual({
            foo: 'buzz',
            bar: 'buzz',
            fizz: 'buzz',
            baz: 'buzz'
        });
    });

    it('should pass the accumulated value through to each function as the second parameter', function () {
        const spy = sinon.stub().returns({bar: 'fizz'});
        const spy2 = sinon.stub().returns({buzz: 'haz'});
        const first = value => ({foo: value});
        const value = combine(
            first,
            spy,
            spy2
        )('bar');

        expect(spy.args[0][1]).toEqual({foo: 'bar'});
        expect(spy2.args[0][1]).toEqual({foo: 'bar', bar: 'fizz'});
    });
});