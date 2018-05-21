/**
 * Pipes a list of callbacks asynchronously. The list can be a mix of async and regular callbacks
 * @param callbacks
 */
import onlyPure from "./onlyPure";

export default function pipeAsync(...callbacks: Function[]) {
    return async function piperizeAsyncPipeline(...inputs: any[]) {
        const first = await callbacks[0](...inputs);

        return piperizeAsyncReducer(
            onlyPure(first, callbacks[0]),
            callbacks.slice(1)
        );
    };
}

async function piperizeAsyncReducer(value: any, otherCallbacks: Function[]) {
    if (otherCallbacks.length) {
        const newValue = await otherCallbacks[0](value);
        return piperizeAsyncReducer(
            onlyPure(newValue, otherCallbacks[0]),
            otherCallbacks.slice(1)
        );
    }

    return value;
}