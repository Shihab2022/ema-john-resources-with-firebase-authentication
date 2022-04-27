import { useEffect, useState } from "react";
import { findDataAtLocalStorage } from "../utilities/fakedb";

const useCards=(products)=>{
    const [cart,setCart]=useState([])
    useEffect(() => {

       const getData =findDataAtLocalStorage()
       const savedCart = [];
       for(const id in getData){
           const addProduct =products.find(product =>product._id ===id)
           // console.log(addProduct)
           if(addProduct){
               const quantity = getData[id];
               addProduct.quantity = quantity;
               savedCart.push(addProduct);
           }

       }
      
       setCart(savedCart);           
    },[products])

    return [cart,setCart];
}
export default useCards;