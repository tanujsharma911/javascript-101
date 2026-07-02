// creating
const now = new Date();
console.log(now); // 2025-10-23T11:57:51.548Z

typeof now // object

// getting
const d = new Date("2025-09-28T15:30:00");

d.getFullYear()   // 2025
d.getMonth()      // 8 (September → months are 0-based)
d.getDate()       // 28
d.getDay()        // 0 (Sunday, 0–6)
d.getHours()      // 15
d.getMinutes()    // 30
d.getSeconds()    // 0
d.getTime()       // timestamp (ms since Jan 1, 1970)

// setting
let b = new Date();

b.setFullYear(2030);
b.setMonth(0);   // January
b.setDate(15);
b.setHours(10, 45, 0);

console.log(b);  // 2030-01-15T05:15:00.000Z

// Formating
const a = new Date();

a.getTime()               // 1761221948481     ->  milliseconds
a.toDateString()          // Sun Sep 28 2025
a.toTimeString()          // 15:30:00 GMT+0530 (India Standard Time)
a.toISOString()           // 2025-09-28T10:00:00.000Z
a.toLocaleString("en-GB") // 28/09/2025, 15:30:00
a.toLocaleTimeString()    // 5:32:48 PM
a.toLocaleDateString()    // 9/28/2025


// date-fns
// npm install date-fns

// import { format } from 'date-fns';

const today = new Date();

// console.log(format(today, 'yyyy-MM-dd'));  // 👉 "2025-10-28"
// console.log(format(today, 'EEE, MMM d'));  // 👉 "Tue, Oct 28"