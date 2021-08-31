"use strict";

const pr3 = new Promise((resolve, reject) => {
    throw new Error('Rejected by throwing an Error!');
});


pr3
  .then((value) => console.log('Resolved with:', value))
  .catch((err) => console.log('catch() ->', err));