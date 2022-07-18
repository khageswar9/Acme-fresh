import './App.css';
import { Routes, Route } from "react-router-dom";
import Footer from './components/footrer/Footer';
import Navbar from './components/navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { Loginaction } from "./actions/User";
import Home from './components/home/Home';
import Login from './components/login&signup/Login';
import Signup from './components/login&signup/Signup';
import Product from './components/products/Product';
import { useEffect } from 'react';
import Contactus from './components/contactus/Contactus';
import Cartpage from './components/cartpage/Cartpage';
import { ProtectedRoute } from './components/Privateroute';
import Paymentpage from './components/paymentpage/Paymentpage';

function App() {
  const userser = useSelector((state) => state.login);
  const dispatch = useDispatch()
  useEffect(()=>{
      var x = localStorage.getItem("user")
      if(x){
        dispatch(Loginaction(true))
      }
  })
  return (
    <div className="App">
        <Navbar/>
        <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/login" element={<Login/>}></Route>
            <Route exact path="/signup"  element={<Signup/>}></Route>
            <Route exact path="/products"  element={<Product/>}></Route>
            <Route exact path="/contactus"  element={<Contactus/>}></Route>
            <Route exact path="/cart" element={
              <ProtectedRoute user={userser}>
              <Cartpage/>
            </ProtectedRoute>
            }></Route>
            <Route exact path="/payment" element={
              <ProtectedRoute user={userser}>
              <Paymentpage/>
            </ProtectedRoute>
            }></Route>

        </Routes>
        <Footer/>
    </div>
  );
}

export default App;
