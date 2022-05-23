import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const nav_items = [
        { id: 'home', title: 'Home', url: '/' },
        { id: 'collection', title: 'Collection', url: '/collections/1' }
    ];

    const nav_jsx = nav_items.map(({id, title, url}) => (
        <li key={id}>
            <Link to={url}>{title}</Link>
        </li>
    ));

    return (
        <header className='shadow-md'>
            <div className='container max-w-7xl mx-auto px-4'>
                <div className='flex justify-between items-center py-4'>
                    <h2 className='font-bold text-base'>FakeShop</h2>
                    <nav>
                        <ul className='flex justify-end items-center gap-6'>
                            {nav_jsx}
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;