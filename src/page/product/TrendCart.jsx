import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector,useDispatch} from '@reduxjs/toolkit';
import { addToCart } from '../../store/Cart';
function TrendCart(props) {
    const carts = useSelector(store => store.cart.items)
    const { id, name, price, photoName, sluge } = props.data;
    const dispatch = useDispatch() 
    const handleAddToCart = () =>{
        dispatch(addToCart({
           productId: id,
           quantity: 1 
        }))

    }
    return (
        <div className="bg-white p-5 rounded-xl shadow-sm-sm">
            <Link to={sluge}>
                <img src={photoName} alt="pic" className="w-full h-80 object-cover object-top drop-shadow-[0_80px-30px_#0007]" />

                <h3 className='text-2xl py-3 text-center font-medium'>{name}</h3>
                <div className='flex justify-between items-center'>
                <p>
                    <span className='text-2xl font-medium'>{price}</span>
                </p>
                <button onClick={handleAddToCart} className='bg-gray-500 p-2 rounded-md text-sm hover:bg-gray-400'>
                     Add to cart
                </button>
                </div>
            </Link>
        </div>
    );
}

TrendCart.propTypes = {
    data: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        photoName: PropTypes.string.isRequired,
        sluge: PropTypes.string.isRequired
    }).isRequired
};

export default TrendCart;
