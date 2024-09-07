'use client'
import Footer from '@/app/(component)/Footer';
import SliderCommen from '@/app/(component)/SliderCommen'
import Image from 'next/image';


function page() {
    const text = 'Cart';
    return (
        <>
            <SliderCommen text={text} />
            <>
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
                            <tbody className='border-[1px] rounded-sm shadow-md '>
                                <tr>
                                    <td>
                                        <div className="flex items-center">
                                            <Image
                                                src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg"
                                                alt="Product Image"
                                                width={100}
                                                height={100}
                                                className="w-20 h-20 m-4"
                                            />
                                            <span>Quisque lorem tortor</span>
                                        </div>
                                    </td>
                                    <td>
                                        <input type="number" value="1" className="w-12 pl-2 text-sm" />
                                    </td>
                                    <td>$19.99</td>
                                    <td>$19.99</td>
                                </tr>
                            </tbody>
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
                                <p>$19.99</p>
                            </div>
                            <div className='flex justify-around py-2 border-x-2 '>
                                <p className='text-gray-600 text-[250]'>Tax(10%)</p>
                                <p>$1.99</p>
                            </div>
                            <div className='flex justify-around py-2 border-x-2 border-2 rounded shadow-lg'>
                            <p className='text-gray-600 text-[250]'>Total</p>
                            <p>$21.98</p>
                            </div>                         
                        </div>
                    </div>
                    <div className="flex justify-end lg:mr-24 mt-8 md:mr-14 mr-0">
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Update Cart</button>
                        <button className="bg-black hover:bg-gray-700 text-white font-bold py-2 px-4 rounded ml-4">Checkout</button>
                    </div>
                </div>

            </>
            <Footer />
        </>
    )
}

export default page