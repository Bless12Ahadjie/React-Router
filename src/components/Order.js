import React from 'react';
import { useNavigate } from 'react-router-dom';

const Order = () => {
    const navigate = useNavigate()
    return (
        <div>
            <h1>Order Successful!!</h1>
            <button onClick={()=>{navigate(-1)}}>Back</button>
        </div>
    );
}

export default Order;
