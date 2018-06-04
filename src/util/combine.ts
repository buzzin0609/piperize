import piperize from "../piperize";

export default function combine(...callbacks) {

    return function combineResolver(...inputs) {
        return callbacks.reduce(
            combineReducerPipeline(...inputs),
            {}
        )
    }
}

function combineReducerPipeline(...inputs) {
    return function combineReducerPipelineResolver(acc, callback) {
        return piperize(
            callback,
            errorIfNotObject(callback),
            applyNewValue(acc)
        )(...inputs);
    }
}

function errorIfNotObject(callback: Function) {

    return function errorIfNotObjectResolver(value: any) {
        if (!Object.keys(value).length) {
            throw new TypeError(`piperize - combine(): callback ${callback.name} supplied to combine returned non object`);
        }

        return value;
    }
}

function applyNewValue(acc: any) {
    return function applyNewValueResolver(value: any) {
        return Object.assign({}, acc, value);
    }
}