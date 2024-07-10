import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

function Checkout() {
    const location = useLocation();
    const { product } = location.state || {};

    const initialFormState = {
        firstName: '',
        lastName: '',
        email: '',
        cardNumber: '',
        expiryDate: ''
    };

    const [form, setForm] = useState(initialFormState);

    if (!product) {
        return <div>No product information available</div>;
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', form);
        setForm(initialFormState);
    };

    return (
        <div className="max-w-3xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Checkout</h1>
            <div className="mb-6">
                <img src={product.photoName} alt={product.name} className="w-full h-auto" />
                <h2 className="text-2xl font-bold">{product.name}</h2>
                <p className="text-xl">${product.price}</p>
                <p className="text-gray-700">{product.description}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block font-medium">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                    <div>
                        <label className="block font-medium">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            className="w-full p-2 border border-gray-300 rounded-lg"
                            required
                        />
                    </div>
                </div>
                <div className="space-y-2">
                    <label className="block font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="block font-medium">Card Number</label>
                    <input
                        type="text"
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className="space-y-2">
                    <label className="block font-medium">Expiry Date</label>
                    <input
                        type="text"
                        name="expiryDate"
                        value={form.expiryDate}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded-lg"
                        required
                    />
                </div>
                <div className='text-center'>
                <button
                    type="submit"
                    className=" text-center p-3 bg-red-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                >
                    Complete Checkout
                </button>
                </div>
            </form>
        </div>
    );
}

export default Checkout;
