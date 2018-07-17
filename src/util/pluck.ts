/**
 * Functional curry utility to extract a specified property from an object
 * @param propName - the name of the property to get
 */
export default function pluck(propName: string) {
    return function pluckResolver(obj: any): any {

        if (obj[propName] === undefined) {
            throw new ReferenceError(`pluck(): property ${propName} is undefined on supplied object`);
        }

        return obj[propName];
    }
}