import React from "react";
import Container from "../layout/Container";
import Title from "@/components/common/Title";
import DiscountProduct from "./DiscountProduct";

const Discount = async () => {
  const res = await fetch("https://dummyjson.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  const products = data.products;
  return (
    <section className="mt-25">
      <Container>
        <Title name="Discount" />
        <div className="flex gap-8.5  mt-8.25">
          <div className="w-63.75 h-89 bg-primary rounded-sm flex flex-col items-center justify-center">
            <h2 className="text-[35px] font-bold text-white">$20</h2>
            <h3 className="text-[26px] font-normal text-white">
              Under Products
            </h3>
            <h4 className="text-sm font-normal text-white">
              Limited Time Only
            </h4>
          </div>
          <DiscountProduct products={products} />
        </div>
      </Container>
    </section>
  );
};

export default Discount;
