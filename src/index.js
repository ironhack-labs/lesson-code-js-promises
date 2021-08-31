"use strict";

const pr4 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Ironhack"), 2000);
});


pr4
  .then(() => {
    console.log("1. then()");
  })
  .then(() => {
    console.log("2. then()");
    throw new Error("Something went wrong");     // <= Throw an Error
  })
  .then(() => {                                  // <= This block is skipped
    console.log("3. then()");
  })
  .catch((err) => console.log("catch() ->", err));