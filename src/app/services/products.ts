import axios from "axios";

const urlBase = "http://127.0.0.1:53169";

// const api = axios.create({
//   baseURL: urlBase,
//   headers: {
//     "country-code": "ar",
//     "Access-Control-Allow-Origin": "true",
//   },
// });

export const getProducts = () =>
  fetch(`/api/alumno`)
    .then((response) => response)
    .then((data) => console.log(data))
    .catch((e) => console.log(e));
