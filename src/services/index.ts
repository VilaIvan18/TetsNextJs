import axios from "axios";

export function getProducts() {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
}
export function getCurrentProduct(id: string | string[] | undefined) {
  return axios.get(`https://jsonplaceholder.typicode.com/photos/${id}`);
}
