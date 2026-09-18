import Image from "next/image";
import React from "react";
import BlogImage from "@/assets/images/blog-image.png";

const BlogCard = () => {
  return (
    <div>
      <Image src={BlogImage} alt="blog" className="w-full" />
      <div className="bg-white py-5 pl-7.75">
        <h3 className="text-sm font-normal text-primarygray mt-6 leading-6">
          BY ADMIN <span className="ml-6">APRIL 05, 2020</span>
        </h3>
        <h2 className=" text-lg font-normal text-primary-black max-w-53 mt-1 ">Woman with good shoes is never be ugly place</h2>
      </div>
    </div>
  );
};

export default BlogCard;
