import React from "react";
import Container from "../Container";
import Title from "@/components/common/Title";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <section className=" bg-bg-gray pt-22.75 pb-25.5 mt-25 ">
      <Container>
        <div className=" flex items-center justify-between mb-8.75 ">
          <Title name="Latest in Blog" />
          <div>
            <button className=" font-medium text-sm text-primary-black leading-6 relative after:content-[''] after:w-24 duration-500 after:h-0.5 after:bg-primary-black after:absolute after:bottom-0 after:left-0 ">
              SEE ALL BLOG
            </button>
          </div>
        </div>
        {/* blog content */}
        <div className=" grid grid-cols-4 gap-7.5 ">
          {Array.from({ length: 4 }).map((_, index) => (
            <BlogCard key={index} />
          ))}
        </div>
        {/* blog content */}
      </Container>
    </section>
  );
};

export default Blog;
