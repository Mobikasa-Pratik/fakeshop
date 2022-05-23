import { ActionTypes } from "../constant/action-types";

const INITIAL_STATE = {
    products: []
};
const collectionReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type){
        case ActionTypes.SET_PRODUCTS:
            return { products: payload }
        default:
            return state;
    }

    return state;
}

export default collectionReducer;