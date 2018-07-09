/**
 * Test suite for catchErrorAsync module
 */

import catchErrorAsync from './catchErrorAsync';
import pipeAsync from "../pipeAsync";

describe('catchErrorAsync:', function () {

    const willError = async () => {
        throw new Error('async error');
    };
    const double = async num => num * 2;

    it('should resolve to have an error property if function errors', async function () {

        const value: any = await pipeAsync(
            catchErrorAsync(willError)
        )(10);

        expect(value.error).toBeTruthy();
    });

    it('should resolve to have a value property if function doesnt error', async function () {
        const result: any = await pipeAsync(
            catchErrorAsync(double)
        )(10);

        expect(result.value).toEqual(20);
    });

    it('should resolve the catch error result error in a pipeline', async function () {
        const result = await pipeAsync(
            double,
            catchErrorAsync(willError)
        )(10);

        expect(result.error).toBeTruthy();
    });

    it('should resolve the catch error result value in a pipeline', async function () {
        const result = await pipeAsync(
            double,
            catchErrorAsync(double)
        )(10);

        expect(result.value).toEqual(40);
    });
});