import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteProduct, getAllProduct } from "../Services/ProductServices";

export default function Products() {
  const [proItem, setProItem] = useState([]);
  useEffect(() => {
    getAllProduct().then((res) => {
      console.log(res.data);
      setProItem(res.data);
    });
  }, []);
  const delPro = (id) => {
    if (window.confirm("Do u want to delete ?")) {
      deleteProduct(id).then((res) => {
        if (res.data) {
          alert("Product deleted successfully");
          let data = proItem.filter((pro) => pro.id !== id);
          setProItem(data);
        }
      });
    }
  };
  return (
    <>
      <h2>Products</h2>
      <Link to={"/addproduct"} className="btn btn-primary mb-2">
        Add Product
      </Link>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {proItem?.map((pro, index) => (
          <div className="col" key={index}>
            <div className="card h-100">
              <img
                src={pro.image}
                className="card-img-top"
                alt="..."
                width={100}
                height={250}
              />
              <div className="card-body">
                <h5 className="card-title">{pro.name}</h5>
                <p className="card-text">
                  Price: {pro.price} <br />
                  Quantity: {pro.quantity}
                </p>
              </div>
              <div className="card-footer">
                <Link
                  to={`/editproduct/${pro.id}`}
                  className="btn btn-primary m-1"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger m-1"
                  onClick={() => delPro(pro.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
