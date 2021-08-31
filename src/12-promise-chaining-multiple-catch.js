"use strict";

const pr7 = new Promise((resolve, reject) => {
  setTimeout(() => resolve('A'), 2000);
});


pr7
  .then((value1) => {
    console.log("1. then()", value1);  
    throw new Error("FIRST ERROR");
  })
  .catch((err) => {
    console.error("1. catch()", err);
    return "Hello from catch";
  })
  .then((value2) => {
    console.log("2. then()", value2);
    throw new Error("SECOND ERROR");
  })
  .catch((err) => {
    console.error("2. catch()", err);
  });