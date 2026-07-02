// Atlassian question

let obj = { lang: 'JavaScript' };

const lib = {};
lib.name = obj;

obj = null;

console.log(lib.name); // What will this log?




















// Answer: { lang: 'JavaScript' }

// Explanation:
// Initially, obj points to an object { lang: 'JavaScript' }.
// When we assign lib.name = obj;, lib.name now references the same object as obj.
// Setting obj = null; only changes the reference of obj to null, 
// but lib.name still holds a reference to the original object.
// Therefore, logging lib.name will output the object { lang: 'JavaScript' }.