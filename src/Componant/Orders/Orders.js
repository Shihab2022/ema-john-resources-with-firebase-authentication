import { faCreditCard, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCards from "../../Hooks/useCarts";
import useProducts from "../../Hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
import Card from "../Card/Card";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products] = useProducts();
  const [cart, setCart] = useCards(products);

  const handleRemoveProduct = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
    removeFromDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="review-item-container">
        
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveProduct={handleRemoveProduct}
          ></ReviewItem>
        ))}{" "}
      </div>{" "}
      <div className="cart-Summary">
        <Card cart={cart}>
          <Link to="/shop">
            <button className="proceedCheckout clear-btn">
              
              Clear Cart{" "}
              <FontAwesomeIcon className="clear-btn-icon" icon={faTrashAlt}>
                
              </FontAwesomeIcon>
            </button>
          </Link>{" "}
          <br />
          <Link to="/shipment">
            <button className="proceedCheckout">
              
              Proceed Shipment{" "}
              <FontAwesomeIcon icon={faCreditCard}> </FontAwesomeIcon>
            </button>
          </Link>{" "}
        </Card>{" "}
      </div>
    </div>
  );
};

export default Orders;
