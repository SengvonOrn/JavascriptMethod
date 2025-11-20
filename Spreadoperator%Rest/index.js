// SPread Operator ==>
const oldFreinds = ["Sengvon", " Thon", "Mng", "Nang"];
const newFriend = ["Sokin", "Hab"];
const bestFriend = ["Sengvon", "Thon", "Mng", "Nang"];

const allFreind = [...oldFreinds, ...newFriend, bestFriend];
// console.log(allFreind);

// Rest Operator ==>
// const [name, name1, name2, name3, name4] = [...oldFreinds, ...newFriend];
const [name, name1, ...allname] = [...oldFreinds, ...newFriend];
// console.log(name);
// console.log(name1);
// console.log(name2);
// console.log(name3);
// console.log(name4);
// console.log(allname);

// Destructuring Assignment ==>
//=================================>
const total = (x, y, ...number) => {
  return number.reduce((sum, num) => sum + num, 0);
};
const numforrspead = [5, 25, 60, 70];

const result = total(10, 20, 30, 40, 50, 60, 70, 80, ...numforrspead);
console.log(result);
