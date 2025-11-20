const dataUser = { name: "Orn sengvon", age: 24 };
// const dataFunct = async () => {
//   const showing = await getUser("Orns sengvon");
//   console.log(showing);
// };
// dataFunct();
// =======
const dataFunct = async () => {
  try {
    const result = await getUser("Orn sengvon");
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
dataFunct();
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
