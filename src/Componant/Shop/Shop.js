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
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useCards(products);
  const [pageCount, setPageCount] = useState(0);
  const [page,setPage]=useState(0)
  const [size,setSize]=useState(15)

  useEffect(() => {
    fetch(`http://localhost:5000/product?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [page,size]);

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
// console.log(page)
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
          <button className={page===number ? 'selectClass' : ''} onClick={()=>setPage(number)}>{number}</button>
        ))}
      
        <select className='option' onChange={e=>setSize(e.target.value)}>
            <option value='20'>20 </option>
            <option value='25'>25 </option>
            <option value='30'>30 </option>
            <option value='35'>35 </option>
        </select>
      </div>
    </div>
  );
};

export default Shop;
