import { useEffect, useState } from "react";
import {  getStoredCart } from "../utilities/fakedb";

const useCards=()=>{
    const [cart, setCart] = useState([]);
    // https://radiant-reef-45876.herokuapp.com/

    useEffect( () =>{
        const storedCart = getStoredCart();
        const savedCart = [];
        const keys = Object.keys(storedCart);
        
        fetch('https://radiant-reef-45876.herokuapp.com/productByKeys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(keys)
        })
        .then(res => res.json())
        .then(products =>{
            for(const id in storedCart){
            const addedProduct = products.find(product => product._id === id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
        })
        
    }, []);
    
    return [cart, setCart];
}
export default useCards;