import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { products } from "./dATA.JS";
import { Link } from "react-router-dom";

const ProductCart = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">

        {products.map((e)=>(
         <div className="col-sm-6 col-md-4 col-lg-3 mb-4">
          <Link to={`/product/${e.id}`} className="card shadow-sm h-100">
            <img
              src={e.image}
              className="card-img-top"
              alt={e.name}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{e.name}</h5>
              <p className="card-text">{e.title}</p>
              <a href="#" className="btn btn-primary mt-auto">
                Buy Now
              </a>
            </div>
          </Link>
        </div>
        ))}
        {/* You can duplicate this col for more products */}
      </div>
    </div>
  );
};

export default ProductCart;
