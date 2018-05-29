export interface CatchErrorResult {
    error: Error,
    value: any
}

/**
 * catches an error for the supplied callback and returns a structured return value to parse in a pipeline
 * @param callback
 */
export default function catchError(callback: Function) {

    /**
     * Resolver wraps the callback in a try/catch and populates the correct property of the return value while the other remains null
     * @param {*} value - the pipeline value
     */
    return function catchErrorResolver(value: any): CatchErrorResult {
        const ret: CatchErrorResult = {
            error: null,
            value: null
        };

        try {
            ret.value = callback(value);
        } catch (e) {
            ret.error = e;
        }

        return ret;
    }
}