"use client";

import Image from "next/image";
import React from "react";
import ProductImage from "@/assets/images/product-image-1.jpg";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Product = ({ item }) => {
  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  );

  const customStyles = {
    itemShapes: Star,

    activeFillColor: ["#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24", "#FBBF24"],

    inactiveFillColor: "#D9D9D9",
  };

  return (
    <div className=" relative group border border-[#E4E4E4] md:w-63.75 w-full h-full duration-300 hover:shadow-lg hover:shadow-primary-black/2.5 rounded-lg overflow-hidden">
      {item?.images ? (
        <Image
          className=" md:w-63.75 md:h-50 object-contain "
          src={item?.images[0]}
          alt="product"
          width={255}
          height={200}
        />
      ) : (
        <Image src={ProductImage} alt="product" width={255} height={200} />
      )}

      <div className=" hidden group-hover:block absolute left-2/4 translate-x-[-50%] ">
        <ul className="flex items-center gap-2.5 justify-center -mt-5">
          <li>
            <button className=" w-10 h-10 bg-[#F3E8D6] duration-500 hover:bg-primary hover:cursor-pointer rounded-full flex items-center justify-center  ">
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.2656 3.28125H9.59913C9.38189 1.43615 7.80875 0 5.90625 0C4.00375 0 2.43061 1.43615 2.21337 3.28125H0.546875C0.244836 3.28125 0 3.52609 0 3.82812V13.4531C0 13.7552 0.244836 14 0.546875 14H11.2656C11.5677 14 11.8125 13.7552 11.8125 13.4531V3.82812C11.8125 3.52609 11.5677 3.28125 11.2656 3.28125ZM5.90625 1.09375C7.20464 1.09375 8.28568 2.04135 8.49458 3.28125H3.31792C3.52682 2.04135 4.60786 1.09375 5.90625 1.09375ZM10.7188 12.9062H1.09375V4.375H2.1875V6.01562C2.1875 6.31766 2.43234 6.5625 2.73438 6.5625C3.03641 6.5625 3.28125 6.31766 3.28125 6.01562V4.375H8.53125V6.01562C8.53125 6.31766 8.77609 6.5625 9.07812 6.5625C9.38016 6.5625 9.625 6.31766 9.625 6.01562V4.375H10.7188V12.9062Z"
                  fill="#074E37"
                />
              </svg>
            </button>
          </li>
          <li>
            <button className=" w-10 h-10 bg-[#F3E8D6] duration-500 hover:bg-primary hover:cursor-pointer rounded-full flex items-center justify-center  ">
              <svg
                width="18"
                height="11"
                viewBox="0 0 18 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6785 4.92787C17.5212 4.72669 13.7733 0 9.00022 0C4.22675 0 0.478773 4.72669 0.321484 4.92787L0 5.33936L0.321484 5.75085C0.478773 5.95203 4.22675 10.6789 9.00022 10.6789C13.7733 10.6789 17.5212 5.95203 17.6785 5.75085L18 5.33936L17.6785 4.92787ZM9.00022 9.34243C5.64324 9.34243 2.71312 6.43592 1.72773 5.33958C2.71357 4.24301 5.64346 1.33696 9.00022 1.33696C12.3568 1.33696 15.2869 4.24324 16.2725 5.33958C15.2864 6.43615 12.3565 9.34243 9.00022 9.34243Z"
                  fill="#074E37"
                />
                <path
                  d="M9.00007 1.68274C6.98339 1.68274 5.34277 3.32313 5.34277 5.33959C5.34277 7.3565 6.98339 8.99712 9.00007 8.99712C11.0168 8.99712 12.6574 7.3565 12.6574 5.33959C12.6574 3.32313 11.0168 1.68274 9.00007 1.68274ZM9.00007 7.66016C7.72038 7.66016 6.67951 6.61907 6.67951 5.33937C6.67951 4.06012 7.72038 3.01925 9.00007 3.01925C10.2796 3.01925 11.3206 4.06012 11.3206 5.33937C11.3206 6.61907 10.2796 7.66016 9.00007 7.66016Z"
                  fill="#074E37"
                />
              </svg>
            </button>
          </li>
          <li>
            <button className=" w-10 h-10 bg-[#F3E8D6] duration-500 hover:bg-primary  hover:cursor-pointer rounded-full flex items-center justify-center  ">
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_115_500)">
                  <path
                    d="M7.70703 2.66895C9.03387 1.34226 11.1941 1.34223 12.5215 2.66895C13.8102 3.95782 13.8404 6.01842 12.5264 7.47949C11.2103 8.94166 7.27133 12.1491 7.08691 12.2988V12.2998C7.05749 12.3237 7.03314 12.3267 7.02246 12.3262L6.99902 12.3252H6.9834C6.95815 12.3246 6.93347 12.3171 6.91211 12.2998V12.2988C6.72609 12.1478 2.78994 8.94112 1.47461 7.47949C0.201121 6.06381 0.188861 4.08607 1.36133 2.79199L1.47852 2.66895C2.764 1.3834 4.83169 1.34356 6.16602 2.54883L6.29297 2.66895L7 3.37598L7.70703 2.66895ZM3.88574 1.90918C3.12643 1.90918 2.36504 2.18083 1.76367 2.72363L1.64551 2.83594C0.418222 4.06322 0.460327 6.00064 1.64941 7.32227C2.73168 8.52502 5.65721 10.9609 6.68164 11.8047L7 12.0674L7.31738 11.8047C8.34149 10.961 11.268 8.5249 12.3506 7.32227V7.32129C13.539 5.99985 13.5817 4.06311 12.3545 2.83594C11.1579 1.63942 9.23483 1.602 7.99219 2.72363L7.87402 2.83594L7.0957 3.61328C7.06661 3.64198 7.02643 3.65399 6.98633 3.64551L6.97266 3.64258L6.95898 3.64062L6.92578 3.62988C6.91675 3.62532 6.90953 3.61948 6.90332 3.61328L6.12598 2.83594C5.50793 2.21796 4.6956 1.90921 3.88574 1.90918Z"
                    fill="#074E37"
                    stroke="#074E37"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_115_500">
                    <rect width="14" height="14" fill="#074E37" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </li>
        </ul>
      </div>
      <div className="pt-8.5 pl-3 md:pl-5 pr-3 md:pr-8.25 pb-3.25">
        <h4 className="text-sm font-normal text-primarygray ">Electronics</h4>
        <h2 className=" truncate text-[15px] font-normal text-primary-black mt-0.5">
          {item?.title ? item?.title : "Headphone"}
        </h2>
        <div className="flex items-center gap-2">
          <Rating
            itemStyles={customStyles}
            style={{ maxWidth: 180 }}
            value={4.5}
            readOnly
          />
          <h6 className=" text-sm font-normal text-primarygray">321,975</h6>
        </div>
        <h3 className=" text-lg font-normal text-secondary mt-2.5">$35.90</h3>
      </div>
    </div>
  );
};

export default Product;
