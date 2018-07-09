import arrayPipe from "./arrayPipe";

/**
 * run the array every function using a list of callbacks
 * @param callbacks
 */
export default function everyWith(...callbacks: Function[]): Function {
    // return arrayPipe('every', ...callbacks);
    return function everyPipe(inputArray) {
        return inputArray.every(item => callbacks.every(cb => cb(item)));
    };
}