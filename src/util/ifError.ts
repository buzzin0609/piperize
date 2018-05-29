import {CatchErrorResult} from "./catchError";

export default function ifError(callback: Function): Function {
    return function ifErrorResolver(catchErrorResult: CatchErrorResult) {
        const { error, value } = catchErrorResult;

        return !!error && callback(error) || value;
    };
}