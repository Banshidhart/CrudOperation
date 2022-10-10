import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editProduct, getProductById } from "../Services/ProductServices";

export default function EditProduct() {
  let [state, setState] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getProductById(id).then((res) => {
      if (res.data) {
        setState(res.data);
      }
    });
  }, []);
  const navigate = useNavigate();
  const handler = (event) => {
    const { name, value } = event.target;
    setState({ ...state, [name]: value });
  };

  const UpdateData = (event) => {
    event.preventDefault();
    editProduct(id, state).then((res) => {
      if (res.data) {
        alert("Product updated successfully");
        navigate("/products");
      }
    });
  };
  return (
    <>
      <h2>Edit Product</h2>
      <form onSubmit={UpdateData}>
        <div className="mb-3">
          <label className="form-label">Name </label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={state.name}
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Price </label>
          <input
            type="text"
            name="price"
            className="form-control"
            value={state.price}
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Quanity </label>
          <input
            type="text"
            name="quantity"
            className="form-control"
            value={state.quantity}
            onChange={handler}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Image </label>
          <input
            type="text"
            name="image"
            className="form-control"
            value={state.image}
            onChange={handler}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Update
        </button>
      </form>
    </>
  );
}
