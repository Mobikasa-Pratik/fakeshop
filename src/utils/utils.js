import axios from "axios"

const _axios = (() => {
    return axios.create({
        baseURL: "https://fakestoreapi.com"
    })
})();

const getAllProducts = async () => {
    return await _axios.get('/products');
}

const getProduct = async (id) => {
    return await _axios.get(`/products/${id}`);
}

export {
    _axios,
    getAllProducts,
    getProduct
}