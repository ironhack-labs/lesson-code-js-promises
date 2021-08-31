"use strict";

const pr1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Ironhack');
  }, 2000);
});


pr1
  .then((val) => console.log('Resolved with:', val));