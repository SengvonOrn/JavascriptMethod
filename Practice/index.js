$(document).ready(function () {
  $("h1").click(function () {
    $(this).hide();
  });
});
// =================================================
const element = document.querySelector(".cintainer");
function sum(...Array) {
  return Array.reduce((acc, val) => acc + val, 0);
}
const result = sum(12, 3, 4, 4);
console.log("Array", result);
element.textContent = result;

// ====
function sum1(...arr) {
  return arr.reduce(function (ac, va) {
    return ac + va; // corrected line
  }, 0);
}
console.log(sum1(12, 12));
// IIFE

(function () {
  var str = "Hello world";
  console.log(str);
})();

//======hight===================================
let ary = [10, 20, 23];
let newAry = ary.map((element) => element + 10);
console.log("hight, map", newAry);
// ==================find=========================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const num = numbers.find(function (numbers) {
  return numbers % 2 == 0;
});
console.log("Find", num);
//====================forEach===========================
const myArray = [1, 2, 3];
myArray.forEach((item) => console.log(item));
// =================ojb============================
const list = { nam: "sengvoun", age: 21, job: "web" };
console.log(list.age > 18 ? "Hello mom" : "Hello dad");
// ===>
const { nam, age, job } = list;
console.log(nam);
//====================push=======================
var numbers1 = [1, 2, 3];
var newnum = [];
for (var i = 0; i < numbers1.length; i++) {
  newnum.push(numbers1[i] + 2);
}
console.log("push", newnum);
// ===============================================
const news = numbers1.map((para) => para * 2);
console.log(news);
// =========key and Valus ======================
const data = {
  One: 1,
  Two: 2,
  Three: 3,
};

console.log(Object.keys(data));
console.log(Object.values(data));
console.log(Object.entries(data));

// ===========assign()====================
const name = {
  firstName: "Orn",
  lastName: "Sengvoun",
};
const Detail = {
  job: "Web",
  constry: "Cambodia",
};
const NewOjb = Object.assign(name, Detail);
console.log(NewOjb);
// ================Ojb Freeze()======================

const func = function () {
  const user = {
    Name: "Orn sengvoun",
    Password: 123467890,
  };
  const NewUser = Object.freeze(user);
  NewUser.Password = "*********";
  NewUser.active = true;
  console.log(NewUser);
};
func();

//
const func2 = () => {
  const user2 = {
    Name: "Orn sengvoun",
    Password: 123467890,
  };
  const NewUser2 = Object.seal(user2);
  NewUser2.Password = "********";
  NewUser2.active = true;
  console.log(NewUser2);
};
func2();
//======================every============================
const number = [1, 2, 3, 4, 5, 6, 7];
const allAreOdd = number.every((number) => {
  return number % 2 != 0;
});
console.log(allAreOdd);
// ========================include============================
const animate = ["Lion", "Dog", "Cat"];
const IsGreatting = animate.includes("Cat");
console.log("include", IsGreatting);

// =========================reduce=============================
const numReduce = [1, 2, 3, 4, 5];
const Reduce = numReduce.reduce((Reduce, amount) => {
  return Reduce + amount;
});
console.log("Reduce", Reduce);
// =======================some===================================
const numSome = [1, 2, 3, 4, 5];
const excecut = numSome.some(function (number) {
  return number % 2 !== 0;
});
console.log("Some", excecut);
// const numSome = [1, 2, 3, 4, 5];
// const executSzome = numSome.some((number) => {
//   return number % 2 !== 0;
// });
// console.log(executSzome);
// ============================String Length vs Trim ==================================
const myString = " Hello my name sengvoun ";
console.log(myString.length);
console.log(myString.trim());
console.log(myString.trim().length);
// =====================================Split=============================================
const myStringSplit = "Hello my name sengvoun";
const arr = myStringSplit.split(" ");
console.log(arr);
// =====================================include string====================================
const subString = " Hello my name is sengvoun";
if (subString.includes("Hello")) {
  console.log("Yes");
} else {
  console.log("No");
}
// ===============================charAt====================================================
const mycharAt = "Hello my name is sengvoun";
console.log("charAt", mycharAt.charAt(7));
// ================================ Slice Stirng============================================
const myStringSlice = "Hello my name is sengvoun";
console.log("slice", myStringSlice.slice(6, 8));
// =====================================To Lower Case=====================================
const myToLowerCase = " Hello my nane is sengvoun";
console.log("ToLowerCase:", myToLowerCase.toLowerCase());
console.log("ToUperCase:", myToLowerCase.toLocaleUpperCase());
// ======================================Replace==========================================
const myReplace = "Hello my name is sengvoun";
console.log("Replace", myReplace.replace("sengvoun", "Sokin"));
// ======================================Concat===========================================
const myConatOne = " Hello my name is sengvoun ";
const myConatTwo = " & I'm a programming ";
const setNew = myConatOne.concat("", myConatTwo);
console.log("Concat", setNew);
// ==================================Start with vs End with===============================
const myStartWith = "Hello my name is sengvoun";
myStartWith.startsWith("sengvoun") ? console.log("Yes") : console.log("No");
myStartWith.endsWith("sengvoun") ? console.log("Yes") : console.log("No");
// ===================================ToString==============================================
const arrTostring = ["Ronaldo", "Messei", "Naymar'jr", "Mbape", "Haland"];
const set = arrTostring.join();
console.log(set);
// ======================================join=================================================
const arrJoin = ["Ronaldo", "Messei", "Naymar'jr", "Mbape", "Haland"];
const set_two = arrTostring.join("  ");
console.log(set_two);
// =======================================pop=================================================
const popMethod = ["A", "B", "C", "D"];
console.log(popMethod.pop());
console.log("pop method", popMethod);
// ========================================push================================================
const pushMethod = ["A", "B", "C", "D"];
console.log(pushMethod.push("E", "F", "G"));
console.log("push", pushMethod);
// =======================================finIndex=============================================
const finMethod = [1, 2, 3, 4, 5, 6, 7];
const fine = (index) => index == 5;
console.log(finMethod.findIndex(fine));
// =================================indexOf vs LastindexOf====================================
let numb = [2, 5, 9, 2, 5, 9, 2];
let index = numb.lastIndexOf(2);
console.log("result is:", index); // Output: 4
// // Specifying a start index
// index = numb.lastIndexOf(2, 3);
// console.log(index); // Output: 1
// ============================================Practice===========================================
const add = (a, b, c) => {
  return a + b + c;
};
const numn = add(12, 3, 5);
const numm = add(1, 24, 2);
console.log(numn, numm);

const arr5 = { id: 1, name: "Orn sengvon", age: 28 };

console.log(arr5.name);
