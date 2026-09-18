"use client";
import Image from "next/image";
import React from "react";
import Container from "../Container";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Banner = () => {
  return (
    <section id="banner" className="bg-[url(/images/banner-bg.png)] bg-cover bg-center relative">
      <Container>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".custom-next-button",
            prevEl: ".custom-prev-button",
          }}
          slidesPerView={1}
          loop={true}
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="pl-13.25 relative font-medium text-[30px] text-primary leading-6 before:content-['']  before:w-10 before:h-0.5 before:bg-primary before:absolute before:top-2/4 before:translate-y-1/2 before:left-0 mb-4">
                  Festive Mode On
                </h4>
                <h1 className="text-[55px] text-secondary font-bold leading-15">
                  Buy More, Save More On{" "}
                  <span className="text-primary">Everything!</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-black leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-black hover:after:w-full after:transition-all">
                  <Link href="#">DISCOVER MORE</Link>
                </h4>
              </div>
              <Image
                src="/images/banner.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="pl-13.25 relative font-medium text-[30px] text-primary leading-6 before:content-['']  before:w-10 before:h-0.5 before:bg-primary before:absolute before:top-2/4 before:translate-y-1/2 before:left-0 mb-4">
                  Festive Mode On
                </h4>
                <h1 className="text-[55px] text-secondary font-bold leading-15">
                  Buy More, Save More On{" "}
                  <span className="text-primary">Everything!</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-black leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-black hover:after:w-full after:transition-all">
                  <Link href="#">DISCOVER MORE</Link>
                </h4>
              </div>
              <Image
                src="/images/banner.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
            <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="pl-13.25 relative font-medium text-[30px] text-primary leading-6 before:content-['']  before:w-10 before:h-0.5 before:bg-primary before:absolute before:top-2/4 before:translate-y-1/2 before:left-0 mb-4">
                  Festive Mode On
                </h4>
                <h1 className="text-[55px] text-secondary font-bold leading-15">
                  Buy More, Save More On{" "}
                  <span className="text-primary">Everything!</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-black leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-black hover:after:w-full after:transition-all">
                  <Link href="#">DISCOVER MORE</Link>
                </h4>
              </div>
              <Image
                src="/images/banner.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="pl-13.25 relative font-medium text-[30px] text-primary leading-6 before:content-['']  before:w-10 before:h-0.5 before:bg-primary before:absolute before:top-2/4 before:translate-y-1/2 before:left-0 mb-4">
                  Festive Mode On
                </h4>
                <h1 className="text-[55px] text-secondary font-bold leading-15">
                  Buy More, Save More On{" "}
                  <span className="text-primary">Everything!</span>{" "}
                </h1>
                <h4 className="inline-block mt-5 font-medium text-sm text-primary-black leading-6 after:content-[''] after:block after:w-2/3 after:h-0.5 after:bg-primary-black hover:after:w-full after:transition-all">
                  <Link href="#">DISCOVER MORE</Link>
                </h4>
              </div>
              <Image
                src="/images/banner.png"
                alt="shape"
                width={518}
                height={329}
                className="mt-30 mb-20"
              />
            </div>
          </SwiperSlide>
        </Swiper>

        <button className="custom-prev-button text-primarygray rounded-full size-11.25 bg-white flex justify-center items-center absolute top-2/4 translate-y-[-50%] left-15 z-10"> <ChevronLeft /></button>
        <button className="custom-next-button text-primarygray rounded-full size-11.25 bg-white flex justify-center items-center absolute top-2/4 translate-y-[-50%] right-15 z-10"> <ChevronRight /></button>
      </Container>
    </section>
  );
};

export default Banner;
