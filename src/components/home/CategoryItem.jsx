import Image from "next/image";
import React from "react";
import CategoryImage from "@/assets/images/category-image.png";

const CategoryItem = () => {
  return (
    <div className=" rounded-lg w-full md:w-65 text-center ">
      <Image src={CategoryImage} alt="category" width={260} height={220} />
      <h3 className=" text-base font-medium text-primary-black  mt-5.25">Airpods</h3>
      <h5 className=" text-sm text-primarygray font-normal">20 Products</h5>
    </div>
  );
};

export default CategoryItem;
