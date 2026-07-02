const task1 = Promise.resolve("Task 1 done");
const task2 = Promise.resolve("Task 2 done");
const task3 = Promise.reject("Task 3 failed!");

// all needs to be fullfilled
Promise.all([task1, task2, task3])
  .then(results => console.log(results))
  .catch(error => console.log("Project failed:", error));