import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';

import { Button } from '@mui/material';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode } from 'swiper/modules';

export default function Intro() {

    const [Products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((response) => setProducts(response.data))
            .catch((error) => console.error('Error fetching data:', error));
    }, []);

    return (
        <>

            <div>

                <Swiper
                    slidesPerView={'auto'}
                    spaceBetween={10}
                    freeMode={true}
                    modules={[FreeMode]}
                    className="mySwiper2 "
                >

                    {Products.slice(0,).map((product) => {

                        return (

                            < SwiperSlide key={product.id} product={product} className=' max-w-[180px] bg-white rounded-xl border-2 border-gray-500 text-right flex flex-col justify-between overflow-hidden' >

                                <img className="w-full max-w-[160px] h-48 p-2 pb-0 object-contain mx-auto" src={product.image} alt={product.title} />
                                <div className="px-4 py-4 flex flex-col h-[120px]">
                                    <Link to={`/ninishop2/product/${product.id}`}>

                                        <div className="font-bold text-l mb-1">
                                            {product.title.split(' ').length > 6 ?
                                                product.title.split(' ').slice(0, 6).join(' ') + '...' :
                                                product.title

                                            }
                                        </div>
                                    </Link>
                                </div>

                                <div >


                                    <p className="px-2 text-gray-700 text-base">${product.price}</p>


                                    <Button variant="contained" color="primary" sx={{ borderRadius: 0, fontFamily: 'gandom' }} className='w-full' onClick={() => handleAddToCart(product)} >

                                        افزودن به سبد خرید

                                    </Button>

                                </div>

                            </SwiperSlide>

                        )
                    })}


                </Swiper>

            </div >
        </>
    );
}
