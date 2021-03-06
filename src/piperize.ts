
import onlyPure from "./onlyPure";

/**
 * Create a pipeline of functions.
 * @param {Function[]} callbacks - the callback functions. MUST ALL BE PURE FUNCTIONS
 */
export default function piperize(...callbacks: Function[]): any {
    return function piperizePipeline(...inputs) {
        const first: Function = callbacks[0];

        return callbacks.slice(1).reduce(
            function piperizeReducer(acc, cb) {
                return onlyPure(
                    cb(acc),
                    cb
                );
            }, first(...inputs)
        );
    };
}

