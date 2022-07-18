import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { useDispatch } from "react-redux";
import { loginFunction } from "../../actions/User";
import './login.css';

const Login = () => {
  const dispatch = useDispatch()
    let navigate = useNavigate();
    const [email , setemail] = useState("")
    const [password , setpassword]=useState("");
    const [enable , setenable] = useState(false)

    useEffect(()=>{
      if((email.includes("@")) && (password.length >= 8)){
        setenable(true);
      }
    },[email,password])
    function loginfun(e){
      e.preventDefault()
      var userinput = {"email":email , "password":password}
        dispatch(loginFunction(userinput))
    }
  return (
    <div>
        <form onSubmit={(e)=>{loginfun(e)}}>
            <input type="text" placeholder="Username"  onChange={(e) => setemail(e.target.value)}/>
            <input type="password" placeholder="Password" onChange={(e) => setpassword(e.target.value)}/>
            <button type="submit" disabled={!enable}>Login</button>
            <button onClick={()=>{navigate("/signup")}}>Signup</button>
        </form>
    </div>
  )
}
// 
export default Login