import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

function WeeklyDeal() {
    return (
        <div className="bg-[#EBF0F5] p-4 rounded-lg shadow-md w-full flex justify-center align-center  ">
            <div className='w-[78%] mt-20'>
                <p className="text-lg text-gray-600 mb-2">Featured</p>
                <h2 className="text-5xl md:text-2xl lg:text-3xl xl:text-6xl text-[#171923] font-[300] mb-2">Weekly Deals</h2>
                <p className="text-sm text-orange-600 mb-4 animated-text">Get the best deals of the week!</p>
                <div className="flex justify-evenly md:my-3 lg:my-6 flex-wrap">
                    <div className="relative group" >
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic8-300x300.jpg"
                            alt="Weekly Deal Image"
                            width={227}
                            height={100}
                            style={{ objectFit: 'cover' }}
                            className="transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer  ">
                            <i className="fas fa-shopping-cart" />
                        </div>
                        <div className="absolute top-[30%] left-[51%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer  ">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <h3 className="text-lg text-gray-600 my-2">Quisque lorem tortor</h3>
                        <p className="text-sm text-gray-600 mb-4">£28.00</p>
                    </div>
                    <div className="relative group">
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic7-300x300.jpg"
                            alt="Weekly Deal Image"
                            width={227}
                            height={100}
                            style={{ objectFit: 'cover' }}
                            className="transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i className="fas fa-shopping-cart" />
                        </div>
                        <div className="absolute top-[30%] left-[51%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <h3 className="text-lg text-gray-600 my-2">Curabitur et ligula</h3>
                        <p className="text-sm text-gray-600 mb-4">£11.20</p>
                    </div>
                    <div className="relative group">
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic6-300x300.jpg"
                            alt="Weekly Deal Image"
                            width={227}
                            height={100}
                            style={{ objectFit: 'cover' }}
                            className="transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i className="fas fa-shopping-cart" />
                        </div>
                        <div className="absolute top-[30%] left-[51%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i class="fa-solid fa-link"></i>
                        </div>
                        <h3 className="text-lg text-gray-600 my-2">Etiam ullamcorper</h3>
                        <p className="text-sm text-gray-600 mb-4">£12.00</p>
                    </div>
                    <div className="relative group" >
                        <Image
                            src="https://themes.muffingroup.com/be/clothing2/wp-content/uploads/2020/07/clothing2-products-pic5-300x300.jpg"
                            alt="Weekly Deal Image"
                            width={227}
                            height={100}
                            style={{ objectFit: 'cover' }}
                            className="transition duration-300 ease-in-out hover:scale-110"
                        />
                        <div className="absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i className="fas fa-shopping-cart" />
                        </div>
                        <div className="absolute top-[30%] left-[51%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                            <i className="fa-solid fa-link"></i>
                        </div>
                        <h3 className="text-lg text-gray-600  my-2">Nulla imperdiet sit amet</h3>
                        <p className="text-sm text-gray-600 mb-4">£25.00</p>
                    </div>
                </div>
                <div className='w-full flex justify-center items-center md:h-[100px] lg:h-[200px]'>
                    <button className='flex justify-center  items-center'>
                        <Link href={'/shop'} className='bg-black text-white px-7 py-2 hover:bg-slate-600'>
                            See all products
                            <i className="fa-solid fa-angle-right pl-2"></i>
                        </Link >
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WeeklyDeal;