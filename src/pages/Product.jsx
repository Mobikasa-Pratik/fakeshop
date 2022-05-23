import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { selectProduct, removeSelectProduct } from '../redux/actions/action';
import { getProduct } from '../utils/utils';
import { useSelector, useDispatch } from 'react-redux';
import Section from '../components/Section';

const Product = () => {
    const { state: {product_id} } = useLocation();
    const dispatch = useDispatch();
    const { product } = useSelector(state => state.selectedProduct);
    console.log('=>', product);
    
    useEffect(() => {
        if(product_id){
            getProduct(product_id).then(res => {
                dispatch(selectProduct(res.data))
            }).catch(err => {
                alert('Something went wrong, Please try again later');
            });
        } else {
            alert('Invalid Product Id');
        }

        return () => {
            dispatch(removeSelectProduct());
        }
    }, []);

    if(!product) return <h2>Loading...</h2>;

    const {id, title, description, image, price} = product;
    
    return (
        <Section section_class="section-product py-6">
            <div className='flex justify-between items-center'>
                <div className='w-1/2'>
                    <img src={image} alt={title} className="max-w-xs" />
                </div>
                <div className='w-1/2'>
                    <h1 className='mb-5'>{title}</h1>
                    <p className='mb-5'>{ description }</p>
                    <p className='mb-5'>${price}</p>
                    <button type='button' className='w-full max-w-fit p-4 border border-solid border-black text-center bg-black text-white rounded-md hover:bg-white hover:text-black'>
                        Add To Cart
                    </button>
                </div>
            </div>
        </Section>
    )
}

export default Product;