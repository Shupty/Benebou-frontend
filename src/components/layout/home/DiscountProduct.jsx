"use client";
import Product from '@/components/common/Product';
import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation } from 'swiper/modules'

const DiscountProduct = ({product}) => {
  return (
    <div className='w-281.5'>
        <Swiper slidesPerView={4} modules={[Navigation]} navigation={true} >
        {product?.map((item) => (
          <SwiperSlide key={item.id}>
          <Product key={item.id} item={item} />
          </SwiperSlide>
        ))}
            </Swiper>
    </div>
  )
}

export default DiscountProduct