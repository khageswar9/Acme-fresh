import {
    legacy_createStore as createStore,
    compose,
    applyMiddleware,
  } from "redux";
  import  reducers  from "./reducers/index";
  import thunk from "redux-thunk";
  
  const createComposer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(reducers, createComposer(applyMiddleware(thunk)));
  
  export { store };