const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 5000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

// race will return the first promise that is fullfilled or rejected
Promise.race([slow, fast])
  .then(winner => console.log("Winner is:", winner));