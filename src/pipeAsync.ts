
import onlyPure from "./onlyPure";
/**
 * Pipes a list of callbacks asynchronously. The list can be a mix of async and regular callbacks
 * @param callbacks
 */
export default function pipeAsync(...callbacks: Function[]) {
    return async function piperizeAsyncPipeline(...inputs: any[]) {
        //use the call function so callers of this function can bind the this context properly
        const first = await callbacks[0].call(this, ...inputs);

        return piperizeAsyncReducer.call(
            this,
            onlyPure(first, callbacks[0]),
            callbacks.slice(1)
        );
    };
}

async function piperizeAsyncReducer(value: any, otherCallbacks: Function[]) {
    if (otherCallbacks.length) {
        const newValue = await otherCallbacks[0].call(this, value);
        return piperizeAsyncReducer.call(
            this,
            onlyPure(newValue, otherCallbacks[0]),
            otherCallbacks.slice(1)
        );
    }

    return value;
}