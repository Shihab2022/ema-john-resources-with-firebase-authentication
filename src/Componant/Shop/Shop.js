import React, {} from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css'
import { addToDb, removeFromDb } from '../../utilities/fakedb'
import useProducts from '../../Hooks/useProducts';
import useCards from '../../Hooks/useCarts';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
const Shop = () => {

    // make defoult hook in modile 53-4 and use
    const [products,setProducts]=useProducts()
 const [cart,setCart]= useCards(products)
 const clearAll=() =>{
   setCart([])
 }

//akoi code bar bar onak jai gai use korty shoby tai akta defoult fun ay raykay takay bivinno componant thaykay  call koary use korbo

    // const [cart,setCart]=useState([])
    //         useEffect(() => {
    //             fetch('products.json')
    //             .then(res=>res.json())
    //             .then(data=>setProducts(data))
    //         },[])

    
    // const [cart,setCart]=useState([])
    // const [cart,setCart]=useState([])
    //  useEffect(() => {

    //     const getData =findDataAtLocalStorage()
    //     const savedCart = [];
    //     for(const id in getData){
    //         const addProduct =products.find(product =>product.id ===id)
    //         // console.log(addProduct)
    //         if(addProduct){
    //             const quantity = getData[id];
    //             addProduct.quantity = quantity;
    //             savedCart.push(addProduct);
    //         }

    //     }
       
    //     setCart(savedCart);           
    //  },[products])

     const handleAddToCart = (product) =>{
    //   console.log(product)
        const newCart = [...cart, product];
       setCart(newCart);
       addToDb(product.id)
    }

         
    return (
        <div className='shop-container'>
         <div className="all-cart-session">
             {
                 products.map(product =><Product product={product} key={product.id} handleAddToCart={handleAddToCart}></Product>)
             }           
             </div> 
             <div className="cart-Summary">
              <Card cart={cart}>

                <Link to='/shop'>
                <button onClick={clearAll} className="proceedCheckout clear-btn">Clear Cart<FontAwesomeIcon className='clear-btn-icon' icon={faTrashAlt} ></FontAwesomeIcon></button>
                </Link>
                <br />
                <Link to='/orders'> 
                <button className="proceedCheckout">Review Order <FontAwesomeIcon className='arrow-icon' icon={faArrowRight} ></FontAwesomeIcon></button>
                
                </Link>

              </Card>
                
             </div>
        </div>
    );
};

export default Shop;