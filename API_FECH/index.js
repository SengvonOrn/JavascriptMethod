const url = "https://www.course-api.com/javascript-store-products";
// fetch(url)
//   .then((respone) => respone.json().then((datals) => console.log(datals)))

//   .catch((erorr) => console.log(erorr));
// ====================
// const getData = async () => {
//   try {
//     const result = await fetch(url);
//     const data = await result.json();
//     console.log(data);
//   } catch (error) {
//     console.dir(error);
//   }
// };
// getData();
// =================
// const getData = async () => {
//   try {
//     const result = await fetch(url);

//     if (!result.ok) {
//       const smg = "You can't insert";
//       throw new Error(smg);
//     }
//     const data = await result.json();
//     // console.log(data[0].fields);
//     const data2 = data[0].fields;
//     console.log(data2.colors);
//     for (let i = 0; i < data2.length; i++) {}
//   } catch (error) {
//     console.log(error);
//   }
// };
// getData();
