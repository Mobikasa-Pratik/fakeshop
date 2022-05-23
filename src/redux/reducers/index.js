import { combineReducers } from 'redux';
import collectionReducer from './collectionReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
    allProducts: collectionReducer,
    selectedProduct: productReducer
});

export default rootReducer;