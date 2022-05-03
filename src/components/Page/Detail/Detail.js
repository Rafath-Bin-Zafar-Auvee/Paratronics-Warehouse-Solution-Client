import React,{useEffect, useState} from "react";
import "./Detail.css";
import { Link } from "react-router-dom";

import { useNavigate, useParams } from "react-router-dom";
const Detail = (props) => {
  const { _id, name, description, price, supplier_name, url, quantity } = props.product;

  const navigate = useNavigate();
  const {id} = useParams();
  
  const goProduct = async(id) => {
    const baseURL = `http://localhost:5000/inventory/${_id}`;
    console.log(baseURL);
    console.log(props.product)
    await navigate(`/inventory/${id}`, {state: props.product});
    console.log("Product clicked")
  };

  return (
    <div>
      <div className="product-contrainer">
        <div className="product-card">
          <img src={url} className="product-image" id="image-product" alt="" />
          <h4 className="product-title">Product Name: {name}</h4>
          <p className="product-text price">Price: {price}$</p>
          <div className="buttons justify-content-evenly">
          <button
              className="custom-btn btn-16"
              onClick={() => goProduct(_id)}
              product={props.product}
            >
              Detail
            </button>
            <button className="buttons-section order custom-btn btn-14">
              
              <Link to={`/inventory/${id}`}>Order</Link> 
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;