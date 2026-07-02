const p1 = Promise.resolve("Task 1 done");
const p2 = Promise.reject("Task 2 failed!");
const p3 = Promise.resolve("Task 3 done");

// allSettled will return all promises, even if they are rejected   
Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));