import React from 'react';
import './Card.css'
const Card = (props) => {
    const {cart}=props;
    // console.log(cart)
    // cart.map(data =>)
    // {cart,...props}
// console.log(props.children)
let total=0;
let shipping=0
    for(const data of cart){
   total = total + data.price;  
   shipping=shipping+data.shipping 
    
    }

    let tax=parseFloat((total*.15).toFixed(3))
   const grandTotal=total+shipping+tax
    
    return (
        <div className="card-detalis">
               <h1 style={{textAlign: 'center'}}>Order Summary</h1>
               <p>Selected Items: {cart.length}</p>
               <p>Total Price : ${total}</p>
               <p>Total Shipping Charge: ${shipping}</p>
               <p>Tax: ${tax}</p>
               <h3>Grand Total: ${grandTotal}</h3>
               {
                   props.children
               }
        </div>
    );
};

export default Card;