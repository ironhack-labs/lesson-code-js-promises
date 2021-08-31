"use strict";

const pr8 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("A"), 2000);
});


pr8
  .then((value1) => console.log("1. then()"))
  .then((value2) => console.log("2. then()"))
  .finally(() => {
    console.log("finally()");
  });