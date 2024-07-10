
import React from 'react';
import { Link } from 'react-router-dom';
import ProductData from './ProductData';

function Product() {
    return (
       <div>
         <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-3 overflow-hidden p-7 sm:mx-5">
            {ProductData.map((product) => (
                <div key={product.id} className="card bg-white rounded-lg shadow-lg py-4 sm:py-8 sm:p-6 overflow-hidden">
                    <Link to={`/product/${product.slug}`}>
                        <img src={product.photoName} alt={product.name} className='w-full h-[600px] lg:h-[400px] object-cover border-white border-4' />
                    </Link>
                    <div className='m-4 flex justify-end space-x-4 p-9 border-20 text-center'>
                        <h1 className='font-bold'>Name: {product.name}</h1>
                        <p className='block text-gray-500 text-sm font-bold'>Price: ${product.price}</p>
                        <p className='block text-gray-500 text-sm font-bold'>Description: {product.description}</p>
                    </div>
                    
                </div>
                
            ))}
          
        </div>
        <div className="ml-[43px] flex space-x-9 text-center justify-center ">
<button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300">
    Lead Ore
</button>
</div>
       </div>
    );
}

export default Product;



