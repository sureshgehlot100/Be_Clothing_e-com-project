'use client'
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen'
import React from 'react'

function page() {
    const text = 'Cart';
    return (
        <>
            <SliderCommen text={text} />
            <>
                <div className="container w-[85%] mx-auto p-4 md:p-8 lg:p-12">
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                    <div className="cart-table">
                        <table className="w-full border-[1px] rounded-lg shadow-md">
                            <thead className='border-b-[1px] items-center'>
                                <tr>
                                    <th className="text-left">Product</th>
                                    <th className="text-left">Quantity</th>
                                    <th className="text-left">Price</th>
                                    <th className="text-left">Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <div className="flex items-center">
                                            <img src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg" alt="Product Image" className="w-20 h-20 mr-4" />
                                            <span>Product Name</span>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" value="1" className="w-12 pl-2 text-sm" />
                                    </td>
                                    <td>$19.99</td>
                                    <td>$19.99</td>
                                </tr>
                                {/* Add more table rows for each product in the cart */}
                            </tbody>
                            <div className="coupon-section mt-4">
                                <h3 className="text-lg font-bold mb-2">Apply Coupon</h3>
                                <input type="text" placeholder="Coupon code" className="w-full pl-2 text-sm border-2" />
                                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Apply</button>
                            </div>
                        </table>
                    </div>
                    <div className="cart-summary mt-8">
                        <h3 className="text-lg font-bold mb-2">Cart Summary</h3>
                        <p>Subtotal: $19.99</p>
                        <p>Tax (10%): $1.99</p>
                        <p>Total: $21.98</p>
                    </div>
                    <div className="flex justify-center mt-8">
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">Update Cart</button>
                        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ml-4">Checkout</button>
                    </div>
                </div>

            </>
            <Footer />
        </>
    )
}

export default page