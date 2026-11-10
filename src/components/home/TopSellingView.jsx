"use client";
import Product from "@/components/common/Product";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css/pagination';
import {  Pagination } from "swiper/modules";

const TopSelling = ({ product }) => {
  return (
    <Swiper slidesPerView={5} pagination={{ clickable: true }} modules={[Pagination]}>
      {product?.map((item) => (
        <SwiperSlide>
          <Product key={item.id} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TopSelling;
