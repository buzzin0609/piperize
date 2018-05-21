/**
 * Test suite for pipeAsync module
 */

import pipeAsync from './pipeAsync';
import * as sinon from 'sinon';

describe('pipeAsync:', function () {

    let stub1, stub2;

    beforeEach(function () {
        stub1 = sinon.stub().resolves(1);
        stub2 = sinon.stub().resolves(2);
    });

    it('should correctly resolve each function before piping it', async function () {
        await pipeAsync(
            stub1,
            stub2
        )(10);

        expect(stub1.args[0][0]).toEqual(10);
        expect(stub2.args[0][0]).toEqual(1);
    });

    it('should correctly resolve the piped value', async function () {
        const first = async num => {
            return num * 2;
        };
        const second = async num => {
            return num - 2;
        };
        const value = await pipeAsync(
            first,
            second
        )(10);

        expect(value).toEqual(18);
    });

    it('should correctly resolve the piped value with non async functions included', async function () {
        const first = async num => num * 2;
        const second = num => num - 2;
        const value = await pipeAsync(
            first,
            second
        )(10);

        expect(value).toEqual(18);
    });

    it('should correctly reject if a non pure function is included', async function() {
        const pure = async num => num * 2;
        const nonPure = async num => {};
        let err;

        try {
            await pipeAsync(pure, nonPure)(2);
        } catch (e) {
            err = e;
        }

        expect(err).toBeTruthy();
    });
});