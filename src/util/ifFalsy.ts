/**
 * Middleware that will fire the given callback if the passed in value is falsy
 * @param cb
 */
export default function ifFalsy(cb: Function): Function {

    return function ifFalsyResolver(value: any): any {

        if (!value) {
            return cb(value);
        }

        return value;
    }
}