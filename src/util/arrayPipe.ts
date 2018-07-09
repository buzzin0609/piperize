import piperize from "../piperize";

/**
 * Pipe a list of callbacks to an array by the methodName, e.g. map, filter, reduce
 * @param methodName
 * @param callbacks
 */
export default function arrayPipe(methodName: string, ...callbacks: Function[]): Function {
    return function pipe(inputArray) {
        arrayPipeCheck(inputArray);
        return inputArray[methodName](piperize(
            ...callbacks
        ));
    }
}

export function arrayPipeCheck(inputArray: any): void {
    if (!Array.isArray(inputArray)) {
        throw new ReferenceError('arrayPipe(): inputArray parameter is not an array. Instead received ' + inputArray.toString());
    }
}

export function innerArrayPipe(methodName, callbacks) {
    return function pipe(item) {
        return callbacks[methodName](cb => cb(item));
    };
}