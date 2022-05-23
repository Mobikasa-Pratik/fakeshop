import { ActionTypes } from "../constant/action-types";

const INITIAL_STATE = {
    product: ''
}
const productReducer = (state = INITIAL_STATE, {type, payload}) => {
    switch(type){
        case ActionTypes.SELECTED_PRODUCT:
            return { ...state, product: payload }

        case ActionTypes.REMOVE_SELECTED_PRODUCT:
            return { ...state, product: null }
    }

    return state;
}

export default productReducer;