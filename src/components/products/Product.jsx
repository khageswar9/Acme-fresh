import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { AddToCart } from "../../actions/User";
import './product.css'

function Product() {
  const dispatch = useDispatch()
  const [products , setproducts] = useState([]);
  const [search , setsearch] = useState("")
  useState((e)=>{
    axios
    .get("http://localhost:3333/product")
    .then((res) => {
      setproducts(res.data)
    })
    .catch((err) => {
      console.log(err + "something went wrong");
    });
  },[])

  function AddtocartFun(obj){
    dispatch(AddToCart(obj))
    alert("Item Added Sucessfuly");
  }

  return (
    <div className='productPage'>
        <div>
          <input type="text" placeholder='Search product' className='serch' onChange={(e)=>{setsearch(e.target.value)}}/>
        </div>
        <div className='productbody'>
          {
            products.filter(e=>e.name.includes(search)).map((obj)=>{
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
                    <button className='addtocart' onClick={()=>{AddtocartFun(obj)}}>Add to Cart</button>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}


export default Product