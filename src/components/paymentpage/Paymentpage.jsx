import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css'

function Paymentpage() {
    let navigate = useNavigate();
    const [name , setname] = useState("")
    const [cardno , setcardno]=useState("");
    const [expary , setexpary] = useState("");
    const [cvv , setcvv] = useState("")

    function myfun(){
        if(name && cardno && expary && cvv){
            alert("Payment sucessfull")
            navigate("/")
        }else{
            alert("fill all the details")
        }
    }

  return (
    <div className='paymentpage'>
                <input type="text" id="one" placeholder="card holder name" onChange={(e)=>{setname(e.target.value)}}/>
                <input type="text" id="two" placeholder="card number" onChange={(e)=>{setcardno(e.target.value)}}/>
                <input type="text" id="three" placeholder="expiry date" onChange={(e)=>{setexpary(e.target.value)}}/>
                <input type="text" id="four" placeholder="enter cvv" onChange={(e)=>{setcvv(e.target.value)}}/>
                <span>If you face any problem Contact us</span>
                <button class="btn" onClick={myfun}>Pay Now</button>
    </div>
  )
}

export default Paymentpage