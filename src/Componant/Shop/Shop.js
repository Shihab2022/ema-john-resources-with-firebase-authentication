import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Product from "../Product/Product";
import "./Shop.css";
import { addToDb, removeFromDb } from "../../utilities/fakedb";
import useProducts from "../../Hooks/useProducts";
import useCards from "../../Hooks/useCarts";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
const Shop = () => {
  // make defoult hook in modile 53-4 and use
  const [products] = useProducts();
  const [cart, setCart] = useCards(products);
  const [pageCount, setPageCount] = useState(0);
  useEffect(() => {
    fetch("http://localhost:5000/productCount")
      .then((res) => res.json())
      .then((data) => {
        const count = data.count;
        const pages = Math.ceil(count / 15);
        setPageCount(pages);
      });
  }, []);
  const clearAll = () => {
    setCart([]);
  };

  const handleAddToCart = (product) => {
    //   console.log(product)
    const newCart = [...cart, product];
    setCart(newCart);
    addToDb(product._id);
  };

  return (
    <div className="shop-container">
      <div className="all-cart-session">
        {products.map((product) => (
          <Product
            product={product}
            key={product._id}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>

      <div className="cart-Summary">
        <Card cart={cart}>
          <Link to="/shop">
            <button onClick={clearAll} className="proceedCheckout clear-btn">
              Clear Cart
              <FontAwesomeIcon
                className="clear-btn-icon"
                icon={faTrashAlt}
              ></FontAwesomeIcon>
            </button>
          </Link>
          <br />
          <Link to="/orders">
            <button className="proceedCheckout">
              Review Order{" "}
              <FontAwesomeIcon
                className="arrow-icon"
                icon={faArrowRight}
              ></FontAwesomeIcon>
            </button>
          </Link>
        </Card>
      </div>
      <div className='pagination'>
        {[...Array(pageCount).keys()].map((number) => (
          <button>{number}</button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
