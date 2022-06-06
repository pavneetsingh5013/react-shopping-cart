import {createStore} from 'redux';
import ShopReducer from './ShopReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const store=createStore(ShopReducer,composeWithDevTools());


export default store;