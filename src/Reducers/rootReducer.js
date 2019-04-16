import CartReducer from "./cartReducer";
import TitleReducer from "./titleReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    CartState: CartReducer, 
    TitleState: TitleReducer
 })

 export default rootReducer;