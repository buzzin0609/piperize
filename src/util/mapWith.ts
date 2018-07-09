import piperize from "../piperize";
import arrayPipe from "./arrayPipe";

/**
 * map an array with multiple callback functions.
 * @param callbacks
 */
export default function mapWith(...callbacks: Function[]): Function {
    return arrayPipe('map', ...callbacks);
}