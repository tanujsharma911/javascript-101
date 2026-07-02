function scope() {
    var v = 10;
}

console.log(v);

// What will this log?












// Answer: ReferenceError: v is not defined

// Explanation:
// The variable v is declared with var inside the function scope of scope(). 
// It is not accessible outside that function, so trying to log it results in a ReferenceError.