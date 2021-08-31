"use strict";

const pr6 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});


pr6
  .then((value1) => {
    console.log("value1:", value1);
    return new Promise((resolve, reject) => setTimeout(() => resolve("B"), 2000));
  })
  .then((value2) => {
    console.log("value2:", value2);
    return new Promise((resolve, reject) => setTimeout(() => resolve("C"), 2000));
  })
  .then((value3) => {
    console.log("value3:", value3);
    return new Promise((resolve, reject) => setTimeout(() => resolve("D"), 2000));
  })
  .then((value4) => {
    console.log("value4:", value4);
  });