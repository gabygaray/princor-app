import axios from "axios";

const urlBase = "http://localhost:58146";

export const fetchCategories = () =>
  axios
    .get(`${urlBase}/api/category`)
    .then((response) => response)
    .catch((e) => console.log(e));
