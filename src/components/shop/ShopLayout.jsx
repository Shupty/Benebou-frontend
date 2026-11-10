import React from "react";
import Container from "@/components/layout/Container";
import ShopBreadcrumb from "@/components/common/Breadcrumb";
import SortAndView from "./SortAndView";
import AllProducts from "./AllProducts";

const ShopLayout = () => {
  return (
    <Container className="flex ">
      <aside className="w-75">sidebar</aside>
      <div className=" w-full">
        <div className="flex items-center justify-between">
          <ShopBreadcrumb />
        <SortAndView />
        </div>
        <AllProducts />
      </div>
    </Container>
  );
};

export default ShopLayout;
