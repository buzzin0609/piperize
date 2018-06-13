# Piperize

Simple light utility to create functional pipelines in Typescript or Javascript.

## Install

NPM: `npm install --save-dev piperize`

Yarn: `yarn add piperize`

Import piperize as and when you need with ES Modules: <br />

`import piperize from 'piperize';`

## Usage

Create a pipeline by simply calling piperize with a list of PURE functions (see a nice explanation of pure functions [here](https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-pure-function-d1c076bec976))

```javascript

const pipeline = piperize(
	func1,
	func2,
	func3
);

```
This will return a function to be called at your leisure:

`const finalValue = pipeline(10);`

Here is a simple full example:

```javascript

import piperize from 'piperize';

const double = num => num * 2;
const minusTwo = num => num - 2;
const pipeline = piperize(
	double,
	minusTwo
);
const value = pipeline(10);

console.log(`Value = ${value}`);
//output: Value = 18
```

## Async workflow?

Piperize has you covered with `pipeAsync()`

You can reliably pipe async or non-async functions with the pipeAsync utility function:

```javascript

import { pipeAsync } from 'piperize';
//async function here
const double = async num => num * 2;
//non async function
const minus2 = num => num - 2;

const value = await pipeAsync(
	double,
	minus2
)(10);

console.log(value); //18

```

## Utility middleware

Piperize comes with some useful utilties to help you in your functional programming work flow:

- ifFalsy - great for piping in error handling or pipeline rescuing
```javascript

import piperize, { ifFalsy } from 'piperize';

function willReturnFalsy(value) {
	return '';
}

function handleFalsy(value) {
	console.log(`piped value was falsy, oops. Here it is ${value}`);
	
	return 'this did though';
}

const value = piperize(
	willReturnFalsy,
	ifFalsy(handleFalsy)
)('wont get through');

console.log(value); //this did though
```

- ifTruthy - to save you null checking
```javascript
import piperize, { ifTruthy } from 'piperize';

function willReturnTruthy(value) {
	return value + ' is soooo truthy';
}

function handleTruthy(value) {
	return value + ' and you know it';
}

const value = piperize(
	willReturnTruthy,
	ifTruthy(handleTruthy)
)('this value');

console.log(value); //this value is soooo truthy and you know it
```

- log - for logging values at any stage in the pipeline

```javascript
import piperize, { log } from 'piperize';


const double = num => num * 2;
const minus2 = num => num - 2;
const buildMessage = num => `Num is ${num}`;

piperize(
    double,
    log,
    minus2,
    buildMessage,
    log
)(10);

//logs: 
//piperize(): Current pipe value: 20
//piperize(): Current pipe value: Num is 18

```

- catchError/catchErrorAsync & ifError - piperize does not catch errors by default. This is intended. This is the fix.

```javascript

import piperize, { catchError, ifError, log } from 'piperize';

const willError = num => { throw new Error('error'); };
const whenError = e => {
	//handle the error
	console.log(e);
	return 10;
};
const afterError = num => `Num is ${num}`;

piperize(
	catchError(willError),
	ifError(whenError),
	afterError,
	log
)(20);

// logs Num is 10
```

- combine - combines the results of a series of pure functions into one object. Handy for consolidating lots of smaller functions or pipelines into a single object

```javascript
import { combine } from 'piperize';

const doubled = num => ({
    doubled: num * 2
});
const tripled = num => ({
    tripled: num * 3
})

const args = combine(
	doubled,
	tripled
)(2);

console.log(args);
// { doubled: 4, tripled: 6 }
```

- ifElse - simple curry utility to resolve a value from a truthy or falsy value

```javascript
import { ifElse } from 'piperize';

//first param is the true value and second is the false one
const eitherOfThese = ifElse('foo', 'bar');

console.log(eitherOfThese(true)); //foo
console.log(eitherOfThese(false)) //bar

```

- firstTruthy - passes a value through a series of functions and returns the first truthy value encountered

```javascript
import { firstTruthy } from 'piperize';

const first = () => false;
const second = () => '';
const third = () => null;
const final = (num, multiplier) => num * multiplier * 2;
const value = firstTruthy(first, second, third, final)(2, 2);

expect(value).toEqual(8); // true
```