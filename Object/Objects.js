// Object Literal
let obj = {
    name: "tanuj",
    age: 26,
    number: 1234
};

// Object() Constructor
let objj = new Object();
objj.name = "Sourav",
    objj.age = 23,
    objj.job = "Developer"

let obj1 = { a: "a", b: 25 };
let obj2 = { c: "c", d: 20 };

const combine = Object.assign({}, obj1, obj2);
// const combine = { ...obj1, ...obj2 };

console.log(combine);
