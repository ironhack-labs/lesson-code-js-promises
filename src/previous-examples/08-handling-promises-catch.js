"use strict";

const pr2 = new Promise((resolve, reject) => {
  setTimeout(() => {
      reject('Rejected!'); // <== This value will be passed to catch()
  }, 2000);
});


pr2
  .then((value) => console.log('Resolved with:', val))
  .catch((err) => console.log('catch() ->', err));