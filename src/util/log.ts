/**
 * safe logging middleware for pipelines. Passes the value back out to the next function after logging
 * @param value
 */
export default function log(value: any): any {
    console.log(`piperize(): Current pipe value: `, value);

    return value;
}