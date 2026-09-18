import Title from "@/components/common/Title";
import Container from "../Container";
import React from "react";
import CategoryItem from "./CategoryItem";

const Category = () => {
  return (
    <section className=" bg-bg-gray pt-25 pb-23.75">
      <Container>
        <div className=" flex items-center justify-between ">
          <Title name="Shop By Category" />
          <div>
            <button className=" font-medium text-sm text-primary-black leading-6 relative after:content-[''] after:w-24 duration-500 after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 ">
              SHOP ALL CATEGORIES
            </button>
          </div>
        </div>
        <div className=" grid grid-cols-5 mt-10 justify-between">
          {Array.from({ length: 5 }).map((_, index) => (
            <CategoryItem key={index} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Category;
