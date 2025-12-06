// TCS final round question

var foo = "🦁";

function showName() {
    foo = "🐼"; // local variable
    return;
    function foo() { } // TODO: Remove this line and check the output
}

showName();

console.log(foo); // What will this log?
























// Answer: It will log "🦁"

// Explanation:
// In JavaScript, function declarations are hoisted to the top of their scope. 
// In the showName function, the line "function foo() { }" creates a local variable foo that shadows the global foo variable.