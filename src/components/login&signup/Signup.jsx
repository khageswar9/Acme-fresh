import React, { useEffect, useState } from "react";
import {useNavigate  } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { signupFunction } from "../../actions/User";
import './login.css';

const Signup = () => {
    let navigate = useNavigate();
    const dispatch = useDispatch()
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    const [conform , setconfirm] = useState("");
    const [enable , setenable] = useState(false)

    useEffect(()=>{
      if((email.includes("@")) && (password.length >= 8) && (conform === password)){
        setenable(true);
      }
    },[email,password,conform]);

    function myfun(e){
      e.preventDefault()
      var userinput = {
        "id":password,
        "email":email ,
        "password":password}
        if(dispatch(signupFunction(userinput))){
          navigate("/login");
        }
    }
  return (
    <div>
        <form onSubmit={(e)=>{myfun(e)}}>
            <input type="text" placeholder="Email"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <input type="password" placeholder="Confirm Password" onChange={(e) => setconfirm(e.target.value)}/>
            <button type="submit" disabled={!enable}>Signup</button> 
        </form>
    </div>
  )
}

export default Signup