import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiTrash2 } from "react-icons/fi";


const Cart = () => {
    const [cartItems, setCartItems] = useState([
        {
        id: 1,
        name: "Slim Fit Office Shirt",
        price: 1900,
        quantity: 1,
        image:
            "https://static.vecteezy.com/system/resources/thumbnails/059/657/635/small/folded-shirt-template-showcasing-stylish-blue-design-perfect-for-formal-occasions-and-casual-wear-png.png",
        },
        {
        id: 2,
        name: "Matte Finish Lipstick",
        price: 850,
        quantity: 2,
        image:
            "https://png.pngtree.com/png-vector/20230423/ourmid/pngtree-moisturizing-liquid-lipstick-png-image_6723753.png",
        },
    ]);

    const increaseQty = (id) => {
        setCartItems(
        cartItems.map((item) =>
            item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
        );
    };


    const decreaseQty = (id) => {
    const updatedCart = cartItems.map((item) =>
        item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    );

    setCartItems(updatedCart);
};


const removeItem = (id) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    const delivery = subtotal > 0 ? 120 : 0;
    const total = subtotal + delivery;

    return (
        <div className="container mx-auto px-4 md:px-10 py-16">
        {/* Header */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
            Shopping Cart 🛒
        </h2>

        {cartItems.length === 0 ? (
            <div className="text-center py-20">
            <p className="text-gray-500 text-lg mb-4">
                Your cart is empty
            </p>
            <Link
                to="/products"
                className="customBg text-white px-6 py-3 rounded-full"
            >
                Continue Shopping
            </Link>
            </div>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border border-zinc-200 p-4 rounded-lg">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                <div
                    key={item.id}
                    className="flex items-center  gap-4 bg-white p-5 rounded-xl shadow"
                >
                    <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 md:w-28 md:h-28 object-fit rounded-lg"
                    />

                    <div className="flex-1">
                    <h3 className="text-md md:text-lg font-semibold text-gray-800">
                        {item.name}
                    </h3>
                    <p className="text-gray-500 mt-1">
                        ৳ {item.price}
                    </p>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-4">
                        <button
                        onClick={() => decreaseQty(item.id)}
                        className="w-8 h-8 border rounded-lg"
                        >
                        -
                        </button>
                        <span className="font-medium">
                        {item.quantity}
                        </span>
                        <button
                        onClick={() => increaseQty(item.id)}
                        className="w-8 h-8 border rounded-lg"
                        >
                        +
                        </button>
                    </div>
                    </div>

                    {/* Remove */}
                    <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:text-red-600"
                    >
                    <FiTrash2 size={20} />
                    </button>
                </div>
                ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-6 rounded-xl shadow h-fit">
                <h3 className="text-xl font-semibold mb-4">
                Order Summary
                </h3>

                <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>৳ {subtotal}</span>
                </div>
                <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>৳ {delivery}</span>
                </div>
                <hr />
                <div className="flex justify-between text-lg font-semibold text-gray-800">
                    <span>Total</span>
                    <span>৳ {total}</span>
                </div>
                </div>

                <button className="w-full mt-6 customBg text-white py-3 rounded-lg font-semibold hover:bg-zinc-800 cursor-pointer transition">
                Proceed to Checkout 
                </button>
            </div>
            </div>
        )}
        </div>
    );
};

export default Cart;
