import axios from "axios";

  const Loginaction = (payload)=>{
    return {
      type: "LOGIN",
      payload : payload ,
    };
  }

  const logoutAction = (payload)=>{
    return {
      type: "LOGOUT",
      payload : payload ,
    };
  }

  const AddToCart = (payload)=>{
    return {
      type: "ADDTOCART",
      payload : payload ,
    };
  }
  const RemoveFromCart = (payload)=>{
    return {
      type: "REMOVEFROMCART",
      payload : payload ,
    };
  }

  // const AddToCart = (data) => async (dispatch) => {
  //   return axios.post("http://localhost:3333/Cart", data)
  //   .then(function (response) {
  //     alert("sign up sucess")
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // };


const loginFunction = (userData) => async (dispatch) => {
    return axios
      .get("http://localhost:3333/users")
      .then((res) => {
        var x = res.data.find(e=>e.email=== userData.email && e.password=== userData.password)
        if(x){
          alert("login sucessfull")
          dispatch(Loginaction(true));
          localStorage.setItem("user" , userData)
        }else{
          alert("plz signup first")
        }
        
      })
      .catch((err) => {
        console.log(err + "something went wrong");
      });
  };



  const signupFunction = (data) => async (dispatch) => {
    return axios.post("http://localhost:3333/users", data)
    .then(function (response) {
      alert("sign up sucess")
    })
    .catch(function (error) {
      console.log(error);
    });
  };

  export {signupFunction,loginFunction,logoutAction , Loginaction,AddToCart,RemoveFromCart}