import axios from "axios";
const API_Url = "http://localhost:5000/products/";

function getAllProduct() {
  return axios.get(API_Url);
}

function getProductById(id) {
  return axios.get(`${API_Url}${id}`);
}

function postAddProduct(data) {
  return axios.post(`${API_Url}`, data);
}

function editProduct(id, data) {
  return axios.put(`${API_Url}${id}`, data);
}

function deleteProduct(id) {
  return axios.delete(`${API_Url}${id}`);
}

export {
  getAllProduct,
  getProductById,
  postAddProduct,
  editProduct,
  deleteProduct,
};
