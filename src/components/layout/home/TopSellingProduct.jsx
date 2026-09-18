

import React from "react";
import Container from "../Container";
import Title from "@/components/common/Title";
import TopSelling from "./TopSellingView";

const TopSellingProduct = async () => {
  let data = await fetch("https://fakestoreapi.com/products?limit=10");
  let product = await data.json();

  return (
    <section id="topselling" className=" mt-22.75 ">
      <Container>
        <div className=" flex items-center justify-between mb-8.75 ">
          <Title name="Top Selling Products" />
          <div>
            <button className=" font-medium text-sm text-primary-black leading-6 relative after:content-[''] after:w-24 duration-500 after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 ">
              SEE ALL PRODUCT
            </button>
          </div>
        </div>
     <TopSelling product={product}/>
      </Container>
    </section>
  );
};

export default TopSellingProduct;
