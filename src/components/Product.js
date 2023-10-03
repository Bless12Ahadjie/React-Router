import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Product = () => {
    return (
        <div>
            <h1>Products</h1>
            <input type='search' placeholder='search product'/>
            <nav>
            <NavLink to='featured'>Feature</NavLink> 
            <NavLink to='new'>New products</NavLink> 
            </nav>
            <Outlet/>
        </div>
    );
}

export default Product;
