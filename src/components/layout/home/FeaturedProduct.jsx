import Title from "@/components/common/Title";
import React from "react";
import Container from "../Container";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Product from "@/components/common/Product";

const FeaturedProduct = async () => {
  let data = await fetch("https://fakestoreapi.com/products");
  let product = await data.json();

  return (
    <section className="mt-24.25 mb-24.25">
      <Container className=" relative">
        <Title name="Featured Products" />
        <div className="mt-8.75">
          <Tabs defaultValue="overview">
            <div className=" absolute top-2.75 right-0">
              <TabsList variant="line">
                <TabsTrigger
                  className=" after:w-[60%] after:left-0 px-0 text-primarygray "
                  value="best-sellers"
                >
                  Best Sellers
                </TabsTrigger>
                <TabsTrigger
                  className=" after:w-[60%] after:left-0 px-0 ml-13.5 text-primarygray "
                  value="most-popular"
                >
                  Most Popular
                </TabsTrigger>
                <TabsTrigger
                  className=" after:w-[60%] after:left-0 px-0 ml-13.5 text-primarygray "
                  value="top-20"
                >
                  Top 20
                </TabsTrigger>
                <TabsTrigger
                  className=" after:w-[60%] after:left-0 px-0 ml-13.5 text-primarygray "
                  value="best-rated"
                >
                  Best Rated
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="best-sellers">
              <div className="grid grid-cols-5 gap-y-7.5">
                 { product.map((_, index) => (
                  <Product item = {_} />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="most-popular">
              <div className="grid grid-cols-5 gap-y-7.5">
                {Array.from({ length: 4 }).map((_, index) => (
                  <Product />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="top-20">
              <div className="grid grid-cols-5 gap-y-7.5">
                {Array.from({ length: 8 }).map((_, index) => (
                  <Product />
                ))}
              </div>
            </TabsContent>
            <TabsContent value="best-rated">
              <div className="grid grid-cols-5 gap-y-7.5">
               { product.map((_, index) => (
                  <Product item = {_} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default FeaturedProduct;
