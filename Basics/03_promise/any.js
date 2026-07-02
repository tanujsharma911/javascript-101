const fail = Promise.reject("Failed 1");
const success = new Promise(resolve => setTimeout(() => resolve("Success!"), 1000));

// any will return the first promise that is fullfilled
Promise.any([fail, success])
  .then(result => console.log(result));