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