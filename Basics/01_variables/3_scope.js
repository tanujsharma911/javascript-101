// Types of scopes

// Global Scope
var globalVar = "I am a global variable";

// Function Scope
function functionScope() {
    var functionVar = "I am a function variable";
    console.log(functionVar); // Accessible here
}

// Block Scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}

// Script Scope
// (In browsers, this is similar to global scope)
const scriptVar = "I am a script variable";

// Module Scope
// (In Node.js or ES6 modules, this is scoped to the module)
export const moduleVar = "I am a module variable";