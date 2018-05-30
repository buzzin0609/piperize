import {CatchErrorResult} from "./catchError";

export default function catchErrorAsync(callback): Function {

    return async function catchErrorAsyncResolver(value: any): Promise<CatchErrorResult> {

        const ret: CatchErrorResult = {
            error: null,
            value: null
        };

        try {
            ret.value = await callback(value);
        } catch(asyncError) {
            ret.error = asyncError;
        }

        return ret;
    }
}