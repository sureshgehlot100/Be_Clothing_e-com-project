'use client'
import { CardData } from '@/app/(component)/CardData';
import Footer from '@/app/(component)/Footer'
import SliderCommen from '@/app/(component)/SliderCommen'
import { addItem } from '@/app/redux/cartSlice';
import Image from 'next/image';
import { useState } from 'react';
import { useDispatch } from 'react-redux';



function Page({ item }) {
  const [selectedOption, setSelectedOption] = useState('Default sorting');
  const [cardData, setCardData] = useState([CardData]);
  const dispatch = useDispatch();
  const text = ('Shop');


  // handle Shorting//
  const handleSortChange = (event) => {
    const selectedOption = event.target.value;
    setSelectedOption(selectedOption);
    let sortedCardData = [...cardData[0]]; // Create a copy of the original cardData
    switch (selectedOption) {
      case 'Sort by popularity':
        sortedCardData.sort((a, b) => b.popularity - a.popularity);
        break;
      case 'Sort by rating':
        sortedCardData.sort((a, b) => b.rating - a.rating);
        break;
      case 'Sort by latest':
        sortedCardData.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'Sort by price: low to high':
        sortedCardData.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
        break;
      case 'Sort by price: high to low':
        sortedCardData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
        break;
      case 'Default sorting':
        window.location.reload(); // Reset to original order
        break;
      default:
        // Default sorting (no change)
        break;
    }
    setCardData([sortedCardData]);
  };
  //handle Add to Cart//
  const handleAddToCart = (item) => {
    dispatch(addItem(item));
  };


  return (
    <div>
      <SliderCommen text={text} />
      <>
        <div className='bg-[#FEFFFE]  flex justify-center'>
          <div className='w-[79%]'>
            <div className='p-6 mt-7 mb-5 border-1 border-white flex justify-between items-center h-full' style={{
              backgroundImage: 'url(https://themes.muffingroup.com/be/clothing2/wp-content/themes/betheme/images/stripes/stripes_5_b.png)',
              backgroundSize: 'auto 14%',
              backgroundRepeat: 'repeat',
              height: '7%',
            }}>
              <div className='text-right'>
                <p className='text-sm'>Showing all 12 results</p>
              </div>
              <div className='flex items-center'>
                <select className='py-1 pl-4 pr-8 text-sm rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600' value={selectedOption}
                  onChange={handleSortChange}>
                  <option>Default sorting</option>
                  <option>Sort by popularity</option>
                  <option>Sort by rating</option>
                  <option>Sort by latest</option>
                  <option>Sort by price: low to high</option>
                  <option>Sort by price: high to low</option>
                </select>
              </div>
            </div>
            <div>
              <div className="flex justify-evenly md:my-3 lg:my-6 flex-wrap">
                {
                  cardData[0].map((item, index) => (
                    <div key={index} className="relative group">
                      <Image
                        src={item.image}
                        alt="Weekly Deal Image"
                        width={227}
                        height={100}
                        style={{ width: '92%' }}
                        className="transition duration-300 ease-in-out hover:scale-110"
                      />
                      <div className="absolute top-[30%] left-[25%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                        <button onClick={() => handleAddToCart(item)}>
                          <i className="fas fa-shopping-cart"></i>
                        </button>
                      </div>
                      <div className="absolute top-[30%] left-[48%] p-5 bg-black bg-opacity-90 hidden group-hover:flex hover:bg-white justify-center items-center text-white hover:text-black cursor-pointer">
                        <button>
                          <i className="fa-solid fa-link"></i>
                        </button>
                      </div>
                      <h3 className="text-lg text-gray-900 font-[250] my-2">{item.description}</h3>
                      <p className="text-sm text-gray-600 mb-4">{item.price.includes(' ') ? (
                        <span className='text-black text-lg'>
                          <s className='text-gray-600 text-sm'>£{item.price.split(' ')[0]}</s>£{item.price.split(' ')[1]}
                        </span>
                      ) : (
                        <span className='text-black'>£{item.price}</span>
                      )}</p>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </>
      <Footer />
    </div >
  )
}

export default Page