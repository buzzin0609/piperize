/**
 * *Functional utility to invoke a specified method on an object
 * @param methodName - name of the method to invoke
 * @param params - parameters to pass into the method call
 */
export default function invoke(methodName: string, ...params: any[]) {
    return function invokeResolver(obj): any {

        if (!obj[methodName]) {
            throw new ReferenceError(`invoke(): method ${methodName} is not a function of supplied object`);
        }

        return obj[methodName](...params);
    }
}