let obj = { model: "Tesla", color: "Red" };

Object.keys(obj);  //-->  gives all keys in array

Object.entries(obj)  //--> is a method that returns an array of [key, value] pairs.

obj.hasOwnProperty("model")  //--> Return false if "obj" has no properties name model

delete obj.color;

// Copy object
// let obj_cpy = { ...obj }  //-->  ❌️create of copy of obj

let obj_cpy = JSON.parse(JSON.stringify(obj))  //-->  ✅️ correct way to copy known as Deep Cloning

let user = {};
user?.address?.city  //--> Check if address or city exists in the user; if so, return its value. If no, return undefined

// Iterating Through Object Properties
for (let key in obj) {
    console.log(key + ": " + obj[key]);
}