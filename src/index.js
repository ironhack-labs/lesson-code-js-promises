"use strict";

const promisePending = new Promise(function (resolve, reject) {});

const promiseResolved = Promise.resolve(42);

const promiseRejected = Promise.reject('We rejected it');

console.log(promisePending);
console.log(promiseResolved);
console.log(promiseRejected);