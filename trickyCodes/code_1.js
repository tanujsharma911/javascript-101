// TCS final round question

var foo = "🦁";

function showName() {
    foo = "🐼";
    return;
    function foo() {}
}

showName();

console.log(foo); // What will this log?