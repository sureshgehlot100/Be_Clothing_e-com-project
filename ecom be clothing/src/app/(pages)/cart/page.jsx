'use client'
import { useSelector, useDispatch } from 'react-redux';
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen'
import Image from 'next/image';
import { removeItem, updateCartQuantity } from '@/app/redux/cartSlice';
import Link from 'next/link';

function Page() {
    const text = 'Cart';
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.items);

    // Calculate subtotal
    const subtotal = cart.reduce((acc, item) => {
        return acc + (item.quantity * (item.price.includes(' ') ? parseFloat(item.price.split(' ')[1]) : parseFloat(item.price)));
    }, 0);

    // Calculate tax (10% of subtotal)
    const tax = subtotal * 0.1;

    // Calculate total
    const total = subtotal + tax;

    // Define helper functions
    function formatPrice(price) {
        return `£${getItemPrice(price).toFixed(2)}`;
    }
    function getItemPrice(price) {
        return price.includes(' ') ? parseFloat(price.split(' ')[1]) : parseFloat(price);
    }


    return (
        <>
            <SliderCommen text={text} />
            {/* // Add a conditional statement to check if the cart is empty */}
            {!cart.length && (
                <div className="container w-[85%] mx-auto p-4 md:p-8 lg:p-12">
                    <p className="text-lg font-bold mb-4 w-full bg-[green] p-4 text-white">
                        Your cart is empty
                    </p>
                    <Link href={'/shop'}>
                        <button
                            className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Return to shop
                        </button>
                    </Link>
                </div>
            )}
            {/* // Then, wrap the rest of your cart content in an else statement */}
            {cart.length > 0 && (
                <div className="container w-[85%] mx-auto p-4 md:p-8 lg:p-12">
                    <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
                    <div className="cart-table">
                        <table className="w-full border-[1px] rounded-sm shadow-xl py-3">
                            <thead className='border-b-[1px] items-center'>
                                <tr>
                                    <th className="text-left p-4">Product</th>
                                    <th className="text-left">Quantity</th>
                                    <th className="text-left">Price</th>
                                    <th className="text-left">Total</th>
                                </tr>
                            </thead>
                            {
                                cart && Array.isArray(cart) && cart.map((item, index) => {
                                    return (
                                        <tbody key={index} className='border-[1px] rounded-sm shadow-md ' >
                                            <tr >
                                                <td>
                                                    <Image
                                                        src={item.image}
                                                        alt="Product Image"
                                                        width={100}
                                                        height={100}
                                                        className="w-20 h-20 m-4 inline-block"
                                                    />
                                                    <span className="inline-block">{item.description}</span>
                                                </td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        value={item.quantity}
                                                        className="w-12 pl-2 text-sm"
                                                        onChange={(e) => {
                                                            let newQuantity = parseInt(e.target.value, 10);
                                                            if (newQuantity < 1) {
                                                                newQuantity = 1;
                                                            }
                                                            dispatch(updateCartQuantity({ itemId: item.id, newQuantity }));
                                                        }}
                                                    />
                                                </td>
                                                <td>{formatPrice(item.price)}</td>
                                                <td>£{(item.quantity * getItemPrice(item.price)).toFixed(2)}</td>
                                                <button
                                                    className="bg-black hover:bg-gray-600 my-8 p-2 transition duration-300 ease-in-out text-white text-lg"
                                                    onClick={() => dispatch(removeItem({ id: item.id }))}
                                                >
                                                    ×
                                                </button>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            }
                            <div className="coupon-section w-1/2 mt-4 flex justify-between m-2">
                                <input type="text" placeholder="Coupon code" className="w-36 p-2 text-lg  border-2 rounded-br-xl" />
                                <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-14 ">Apply</button>
                            </div>
                        </table>
                    </div>
                    <div className="cart-summary mt-8 flex justify-end">
                        <div className='w-1/2'>
                            <h3 className="text-lg font-bold mb-2">Cart totals</h3>
                            <div className='flex justify-around py-2 border-x-2 border-2 rounded shadow-sm '>
                                <p className=' text-gray-600 text-[250]'>Subtotal</p>
                                <p>£{subtotal.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-around py-2 border-x-2 '>
                                <p className='text-gray-600 text-[250]'>Tax(10%)</p>
                                <p>£{tax.toFixed(2)}</p>
                            </div>
                            <div className='flex justify-around py-2 border-x-2 border-2 rounded shadow-lg'>
                                <p className='text-gray-600 text-[250]'>Total</p>
                                <p>£{total.toFixed(2)}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-end lg:mr-24 mt-8 md:mr-14 mr-0">
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Update Cart</button>
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">Checkout</button>
                    </div>
                </div >
            )}
            <Footer />
        </>
    )
}

export default Page;