import { combineReducers, createStore } from "redux"
import cartReducer from "./cart";
import productsReducer from "./product"
import categoryReducer from './categories';


let reducers = combineReducers({
     productsReducer,
     categoryReducer,
     cartReducer,
});

const store = () => {
    return createStore(reducers);
}

export default store();