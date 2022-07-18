const INITIAL_STATE = {
    cart:[],
    login : false
  };
  function reducers(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "LOGIN":
        return { ...state, login:true};

      case "LOGOUT":
        return { ...state, login:false};

      case "ADDTOCART":
        return { ...state, cart:[...state.cart , action.payload]};
      case "REMOVEFROMCART":
        return { ...state, cart:[...state.cart].filter((e)=> e.id !== action.payload.id)};

      default:
        return state;
    }
  }
  export default reducers