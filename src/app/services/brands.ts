import axios from "axios";

const urlBase = "http://localhost:58146";

export const fetchBrands = () =>
  axios
    .get(`${urlBase}/api/brand`)
    .then((response) => response)
    .catch((e) => console.log(e));
