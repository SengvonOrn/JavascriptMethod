// const promise = new Promise((resole, reject) => {
//   //   resole("you are success");
//   reject("something when wrong");
// });
// promise
//   .then((respone) => console.log(respone))
//   .catch((erorr) => {
//     console.log(erorr);
//   });
//   ===========
const dattUser = { name: "Orn sengvons", age: 21 };
// getData("Orn sengvons").then((resp) => console.log(resp)).catch((erorr)=> console.log(erorr));

const someFunct = async () => {
  try {
    const result = await getData("Orn sengvon");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
someFunct();
function getData(name) {
  return new Promise((resole, reject) => {
    const result = dattUser.name === name;
    if (result) {
      resole("True");
    } else {
      reject("wrong");
    }
  });
}
