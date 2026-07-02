

if (true) {
    let l = 10;
    var v = 20;
    const c = 30;
}

console.log("Outside block:");
console.log("var v =", v);
console.log("let l =", l);
console.log("const c =", c);



// Which of the above console.log statements will work and which will throw an error?














// Answer:
// var v will work and print 20.
// let l will throw a ReferenceError.
// const c will also throw a ReferenceError.

// Explanation:
// Variables declared with var are function-scoped or globally-scoped, 
// so v is accessible outside the block and prints 20.
// Variables declared with let and const are block-scoped, 
// so l and c are not accessible outside the block, resulting in ReferenceErrors when trying to access them.