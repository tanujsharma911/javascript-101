console.log(v);

var v = 10;

console.log(l);

let l = 20;

// What will this log?








// Answer: undefined and then ReferenceError


// Explanation:
// In JavaScript, variable declarations using var are hoisted to the top of their scope and initialized with undefined. 
// Therefore, the first console.log(v) outputs undefined.
// However, variables declared with let are also hoisted but are not initialized. 
// Accessing them before their declaration results in a ReferenceError, which is why the second console.log(l) throws an error.
