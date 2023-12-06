//A promise is an asynchronous action that may complete at some point and produce a value.

// The easiest way to create a promise is by calling Promise.resolve . This function ensures that the value you give it is wrapped in a promise. If it’s already a promise, it is simply returned—otherwise, you get a new promise that immediately finishes with your value as its result.

//To get the result of a promise, you can use its then method. This registers a callback function to be called when the promise resolves and produces a value.
let four = Promise.resolve(4);
four.then(value => console.log(`Got ${value}`));

// This asynchronous function returns a meaningful value.

const withCallBack = cb => setTimeout(cb, 0);
withCallBack(() => console.log(`This is executed by an asynchronous callback`));

const withPromise = () => Promise.resolve('This was excuted by a Promise');

withPromise().then(res => console.log(res));

//BIG EXAMPLE

const dataSource =
  'Apples,Mangoes,Kiwi,Strawberries,Pineapple,Oranges,Raspberries';

// Convert String to Array
//cb is Callback
const strToArray = (str, cb) =>
  setTimeout(function () {
    if (typeof str !== 'string')
      return cb('Invalid data presented. Only strings can be processed', null);

    cb(null, str.split(','));
  }, 0);

// Transform each string and prefix the words 'I love '
const loveFruits = (arr, cb) =>
  setTimeout(function () {
    if (!Array.isArray(arr))
      return cb('Invalid data presented. Only arrays can be transformed', null);

    cb(
      null,
      arr.map(e => `I love ${e}`)
    );
  }, 0);

// Print the array on the console
const echoArray = arr => arr.forEach((e, i) => console.log(`${i + 1}. ${e}`));

// Execution using callbacks
// strToArray(dataSource, (error, res) => {
//   if (error) return Error(error);

//   loveFruits(res, (error, res) => {
//     if (error) return Error(error);

//     echoArray(res);
//   });
// });

const Promisify =
  func =>
  (...args) => {
    return new Promise((resolve, reject) => {
      func.call(this, ...args, (error, result) => {
        if (error) return reject(error);

        resolve(result);
      });
    });
  };

// strToArrayPromise
const strToArrayPromise = Promisify(strToArray);
// loveFruitsPromise
const loveFruitsPromise = Promisify(loveFruits);

// Execution using Promises
strToArrayPromise(dataSource)
  .then(loveFruitsPromise)
  .then(echoArray)
  .catch(error => console.log(error));
