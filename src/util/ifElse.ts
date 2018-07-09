export default function ifElse(trueValue: any, falseValue: any) {

    return function ifElseResolver(value: any) {

        if (!!value) return trueValue;

        return falseValue;
    }
}