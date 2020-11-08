import {createStore, compose, applyMiddleware} from "redux";
import rootReducer from "./Reducers/rootReducer";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     (typeof window !== 'undefined' && window.devToolsExtension) &&
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = configureStore({
  reducer: rootReducer
})

export default store;
