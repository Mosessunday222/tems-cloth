
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ProductData from './ProductData'; 

function ProductDetail() {
    const { slug } = useParams();
    const product = ProductData.find(p => p.slug === slug);
    const navigate = useNavigate();

    if (!product) {
        return <div>Product not found</div>;
    }

    const handleCheckout = () => {
        navigate('/checkout', { state: { product } });
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <img src={product.photoName} alt={product.name} className="w-full h-auto" />
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <p className="text-xl font-semibold mb-4">${product.price}</p>
            <button 
                onClick={handleCheckout} 
                className="w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
            >
                Checkout
            </button>
        </div>
    );
}

export default ProductDetail;
