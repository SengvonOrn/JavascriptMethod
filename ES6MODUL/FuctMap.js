// import { arr } from "./data.js";
import arr from "./data.js";
const Arrmap = arr
  .map((r) => {
    return `<h2>${r.name}</h2>`; // Corrected closing tag
  })
  .join("");
export default Arrmap;
