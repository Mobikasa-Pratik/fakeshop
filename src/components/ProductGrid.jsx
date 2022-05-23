import React from 'react';
import { Link } from 'react-router-dom';

const ProductGrid = ({ product }) => {
    const { id, title, price, 
        description, category, 
        image, rating: {rate, count: rate_count} } = product;
    return (
        <li className='border border-solid border-gray-300 rounded-sm p-4'>
            <figure className='relative'>
                <img src={image} alt={title} className="block w-full h-full max-h-52 object-contain object-center pb-4" />
                <figcaption>
                    <h2>{title}</h2>
                    <p>{`$${price}`}</p>
                    <p>Rating: {rate}</p>
                </figcaption>
                <Link to={{
                    pathname: `/products/${id}`, 
                    state: {product_id: id}
                }} className='absolute top-0 left-0 w-full h-full block' />
            </figure>
        </li>
    )
}

export default ProductGrid;