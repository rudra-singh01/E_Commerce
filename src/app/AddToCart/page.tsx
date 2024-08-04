"use client"
import React, { useEffect, useState } from 'react';

interface CartItem {
    id: number;
    name: string;
    price: number;
    image: string;

}

function page() {
    const [cart, setCart] = useState<CartItem[]>([])

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
        setCart(storedCart);
    }, []);
    const removeFromCart = (id: number) => {
        const updatedCart = cart.filter(item => item.id !== id);
        setCart(updatedCart);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    };
    return (
        <div className="min-h-screen bg-black text-white py-12 px-4">
            <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>
            {cart.length > 0 ? (
                <ul className="space-y-4">
                    {cart.map((item) => (
                        <li key={item.id} className="flex items-center justify-between bg-gray-800 p-4 rounded-lg">
                            <div>
                                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                                <h2 className="text-lg font-semibold">{item.name}</h2>
                                <p>Price: ₹{item.price}</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-lg font-semibold">Qty: 1</span>
                                <button 
                                    onClick={() => removeFromCart(item.id)} 
                                    className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="text-center">No items in your cart.</p>
            )}
        </div>
    );
};

export default page