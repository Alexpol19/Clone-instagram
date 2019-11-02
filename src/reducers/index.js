import { createStore, combineReducers } from "redux";
import photoReducer from "./photoReducer";
import userReducer from './userReducer';

let reducers=combineReducers({
   gallery: photoReducer,
   users: userReducer,
})
let store=createStore(reducers);

export default store;