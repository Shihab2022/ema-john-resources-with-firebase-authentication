import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus} from '@fortawesome/free-solid-svg-icons'
const Product = ({product, handleAddToCart}) => {
  // console.log(props)
    const {img,name,category,price,seller,ratings}=product
    return (
        <div className="cart">
          <img src={img} alt="" />
          <div className="cart-info">
          <h3>Name : {name}</h3>
          <h4>Category : {category}</h4>
          <h4>Price : ${price}</h4>
          <p>Manufacturer : {seller}</p>
          <p>Rating : {ratings}</p>
          </div>
         <button onClick={() => handleAddToCart(product)} className="cart-btn">
           <p>Add to cart</p>
           <FontAwesomeIcon icon={faCartPlus} />
         </button>
        </div>
    );
};

export default Product;