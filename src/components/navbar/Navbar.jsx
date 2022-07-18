import React from 'react';
import { BsCart2 } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../actions/User";
import './navbar.css';

function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.login);
  function logoutfun(){
    dispatch(logoutAction(true))
    localStorage.removeItem("user");
    alert("logout sucessful")
  }
  return (
    <div className='Navabr flex'>
        <div><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-En1S1IXpIpjrN7Vda8PkhS9y9V16RLbHkw&usqp=CAU" alt="logo" id='logo'/></div>
        <div className='linkDiv flex'>
        <Link to="/"> <div className='hoover'>Home</div></Link>
        <Link to="/products" className='hoover'><div>Products</div></Link>
        <Link to="/contactus" className='hoover'><div>Contact Us</div></Link>
        </div>
        <div className='flex cart'>
        {user === false?<Link to="/login"><div className='hoover'>Login</div></Link>:<div onClick={logoutfun} className='hoover'>Logout</div>}
          <Link to="/cart"><div>{<BsCart2/>}</div></Link>
        </div>
    </div>
  )
}

export default Navbar