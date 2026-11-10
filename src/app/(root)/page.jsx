import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import Category from "@/components/home/Category";
import Content from "@/components/home/Content";
import Discount from "@/components/home/Discount";
import FeaturedProduct from "@/components/home/FeaturedProduct";
import TopSellingProduct from "@/components/home/TopSellingProduct";
import Whatsapp from "@/components/home/Whatsapp";

const page = () => {
  return (
    <main>
      <Banner />
      <Content />
      <FeaturedProduct />
      <Category />
      <TopSellingProduct />
      <Discount />
      <Blog />
      <Whatsapp />
    </main>
  );
};

export default page;
