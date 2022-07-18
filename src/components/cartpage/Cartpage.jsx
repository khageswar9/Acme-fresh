import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import {useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { RemoveFromCart } from '../../actions/User';
import "./cartpage.css"

function Cartpage() {
    let navigate = useNavigate();
    const products = useSelector((state) => state.cart);
    const dispatch = useDispatch()
    const [total , settotal] = useState(0)
useEffect(()=>{
    settotal(products.reduce(
        (previousValue, currentValue) => previousValue + currentValue.price,
        0
      ))
},[products])

  return (<>
    
    {products.length !== 0 ?<div className='cartpage'> <div className='productbody'>
    {
        products.map((obj)=>{
          return (
            <div className='ProductDiv' key={obj.id}>
                <div className='imgdiv'>
                  <img src={obj.image} alt="img" className='productimg'/>
                </div>
                <div className='productdetails'>
                  <span>{obj.name}</span>
                  <span>Price : {obj.price}</span>
                  <span>Rating : {obj.rating}*</span>
                </div>
                <button className='addtocart' onClick={()=>{dispatch(RemoveFromCart(obj))}}>Remove From Cart</button>
            </div>
          )
        })
      }
</div>
<div className='cartvalue'><h3> Your Total Cart Value is : Rs{total}</h3>
      <button className='paymentbtn' onClick={()=>{navigate("/payment")}}>Go to Payment Page</button></div>
</div>:<div>
    <img src="https://cdn3.iconfinder.com/data/icons/shopping-and-ecommerce-29/90/empty_cart-512.png" alt="empty logo" />
    <h1>Your cart is empty</h1>
</div>
}


  </>)
}

export default Cartpage