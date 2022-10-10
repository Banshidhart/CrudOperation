import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postAddProduct } from "../Services/ProductServices";

export default function AddProduct() {
  let [state, setState] = useState({
    name: "",
    price: "",
    quantity: "",
    image: "",
  });
  const navigate = useNavigate();
  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };
  const postData = (event) => {
    event.preventDefault();
    postAddProduct(state).then((res) => {
      if (res.data) {
        alert("Product added successfully");
        navigate("/products");
      }
    });
  };
  return (
    <>
      <h2>AddProduct</h2>
      <form onSubmit={postData}>
        <div className="mb-3">
          <label className="form-label">Name </label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price </label>
          <input
            type="text"
            name="price"
            className="form-control"
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quanity </label>
          <input
            type="text"
            name="quantity"
            className="form-control"
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image </label>
          <input
            type="text"
            name="image"
            className="form-control"
            onChange={handler}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
      </form>
    </>
  );
}
