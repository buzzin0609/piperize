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

`const finalValue = pipline(10);`

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