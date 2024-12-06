import React from 'react';

const Product = ({ product }) => {
  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>{product.description}</p>
      <p>${product.price}</p>
      <div className="actions">
        <button>Show</button>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default Product;