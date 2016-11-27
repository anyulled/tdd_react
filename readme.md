# Test Driven Development with ReactJs

## Prerequisites

- NodeJs
- npm

## Environment

- Quik [web](https://www.npmjs.com/package/quik)

### Test Runner

- **Mocha**: it's the top-level tool responsible for finding and loading test files, trnaspiling them, and running the test code itself: the `describe` and `it` blocks that compose the tests.

- **Chai**: is the assertion library. It supplies the `expect` and `assert` calls we'll use in the tests to verify everything is working correctly. [web](http://chaijs.com/api/)
 
- **Sinon**: is a library for creating and inspecting spies. _Spies_ let you mock and stub pieces of functionality in order to keep the tests focused on the component under test. [web](http://sinonjs.org/docs/)

- **Enzyme**: is a library for rendering and making assertions on React components. [web](http://airbnb.io/enzyme/docs/api/index.html)

### Testing workflow

 1. Run `mocha` at the command line, wit some arguments.
 2. Mocha finds the test files and transpiles them.
 3. Mocha executes the tests, which are writeen in Javascript (EcmaScript 6).
 4. Each test will `import` _enzyme_ and _chai_, then use them to render components and make assertions.
 
#### Getting started
 
1. Install module dependencies with `npm install`
2. Install Quik `npm i -g quik`
3. Install Mocha `npm i -g mocha`
4. To run your test, simply type `npm test`
5. Run `npm start` to start the app.