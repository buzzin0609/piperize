import piperize from "../piperize";
import ifFalsy from "./ifFalsy";

export default function firstTruthy(...callbacks) {
    return function firstTruthyResolver(...inputs) {
        if (!callbacks[0]) return null;

        return piperize(
            callbacks[0],
            ifFalsy(
                () => firstTruthy(
                    ...(callbacks.slice(1))
                )(...inputs)
            )
        )(...inputs);
    }
}