import React from "react";
import Container from "../layout/Container";
import Title from "@/components/common/Title";
import TopSelling from "./TopSellingView";

const TopSellingProduct = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const products = data.products;

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
        <TopSelling product={products} />
      </Container>
    </section>
  );
};

export default TopSellingProduct;
