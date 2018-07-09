import {arrayPipeCheck, innerArrayPipe} from "./arrayPipe";

export default function filterWith(...callbacks: Function[]) {
    return function filter(inputArray: any[]): any[] {
        arrayPipeCheck(inputArray);
        return inputArray.filter(innerArrayPipe('every', callbacks));
    };
}