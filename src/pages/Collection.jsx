import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductGrid from '../components/ProductGrid';
import { getAllProducts } from '../utils/utils';
import { setProducts } from '../redux/actions/action';
import Section from '../components/Section';

const Collection = () => {
    const { products } = useSelector(state => state.allProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        getAllProducts().then(res => {
            dispatch(setProducts(res.data));
        }).catch(err => {
            alert('Something went wrong, Please try again later');
        });
    }, []);

    let productsJSX = 'Loading...';
    if(products.length){
        productsJSX = products.map(product => (
            <ProductGrid key={product.id} product={product} />
        ));
    }
    
    return (
        <Section section_class="section-collection py-6">
            <ul className='grid grid-cols-4 gap-8'>{productsJSX}</ul>
        </Section>
    )
}

export default Collection;