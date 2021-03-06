/**
 * takes the result of a function and will check for undefined and throw an error. Pure functions should always return a valid value
 * @param value
 * @param cb
 */
export default function onlyPure(value: any, cb: Function) {
    if (value === undefined) {
        const message = `${cb.name || 'Anonymous'} function returned undefined. This is an indication that this isn't a pure function.`;
        throw new TypeError(message);
    }

    return value;
}