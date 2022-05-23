import { ActionTypes } from "../constant/action-types";

const setProducts = products => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products
    }
}

const selectProduct = product => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    }
}

const removeSelectProduct = () => {
    return {
        type: ActionTypes.SELECTED_PRODUCT,
        payload: ''
    }
}

export {
    setProducts,
    selectProduct,
    removeSelectProduct
}