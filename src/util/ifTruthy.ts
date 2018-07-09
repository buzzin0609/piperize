/**
 * middleware to fire a callback only if the piped value is truthy. Returns false to prevent errors with undefined values
 * @param cb
 */
export default function ifTruthy(cb: Function): Function {
    return function ifTruthyResolver(value) {
        return value && cb(value) || false;
    };
}