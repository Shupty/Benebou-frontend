import Banner from '@/components/layout/home/Banner'
import Blog from '@/components/layout/home/Blog'
import Category from '@/components/layout/home/Category'
import Content from '@/components/layout/home/Content'
import Discount from '@/components/layout/home/Discount'
import FeaturedProduct from '@/components/layout/home/FeaturedProduct'
import TopSellingProduct from '@/components/layout/home/TopSellingProduct'



const page = () => {
  return (
     <main className='mb-20'>
      <Banner/>
     <Content/>
     <FeaturedProduct/>
     <Category/>
     <TopSellingProduct/>
     <Discount/>
     <Blog/>
    </main>
  )
}

export default page