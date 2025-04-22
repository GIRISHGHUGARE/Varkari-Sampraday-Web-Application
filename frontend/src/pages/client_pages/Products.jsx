import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const onClick = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  
  useEffect(() => {
    Axios.get('http://localhost:5001/api/v1/product/getProducts')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {products.flat().map(product => (
            <div key={product._id} className="col">
              <div className="card shadow bg-white" style={{ width: "18rem", height: "35rem" }}>
                <img src={product.p_image} className="card-img-top" alt="..." style={{ width: "18rem", height: "18rem", border: "1px solid black" }} />
                <div className="card-body">
                  <h5 className="card-title">{product.p_name}</h5>
                  <p className="card-text">{product.p_price}</p>
                  <p className="card-text">{product.p_description}</p>
                  <button 
                    className="btn btn-custom-white" 
                    onClick={() => onClick(product)}
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
