setTimeout(() => {
  console.log("Hi");
  setTimeout(() => {
    console.log("Hello ");
    setTimeout(() => {
      console.log("Sengvoun");
    }, 100);
  }, 2000);
}, 3000);
// ======>
// Promise ==========================================>
const obj = new Object();
obj.name = "Orn Sengvon";
console.log(obj);
//==>
// const promise = new Promise((resolve, reject) => {
//   //   resolve("Hello world"),
//   reject("Something wrong!");
// });
// promise
//   .then((respone) => {
//     console.log(respone);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// How to use Promise==================================>
const dataUser = { name: "Orn sengvon", age: 24 };
function getUser(after) {
  return new Promise((resove, rejec) => {
    const result = dataUser.name === after;
    if (result) {
      resove("result");
    } else {
      rejec("Error");
    }
  });
}
getUser("Orn sengvon")
  .then((resp) => console.log(resp))
  .catch((err) => console.log(err));
//   ===================================
