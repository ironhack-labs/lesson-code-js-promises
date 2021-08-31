"use strict";

const myPromise = new Promise(function (resolve, reject) {
   if (true) {  /* condition */
      resolve(/* value */);  // fulfilled successfully
   }
   else {
      reject(/* reason */);  // error, rejected
   }
});