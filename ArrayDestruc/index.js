// ==================Assign array items to variable=====
// const [a, b, c] = [
//   { name: "Orn Vandy", age: 21, Currently: "Student" },
//   { name: "Orn Vanda", age: 21, Currently: "Student" },
//   { name: "Orn Sokea", age: 21, Currently: "Student" },
// ];
// console.log(a.name);
// ===================SSkips Items========================
// const [c] = [10, "Hello world", true];
// console.log(c);
// =====Assign first Values Storing rest Together========
// const [a, b, c, ...rest] = [
//   1,
//   "Hello world",
//   "Foothballer",
//   2,
//   "Sengvon",
//   "web developer",
// ];
// console.log(rest);
// =================Swapping variable=======================
let x = true;
let y = false;
[x, y] = [y, x];
console.log(x);
// ========================================================
