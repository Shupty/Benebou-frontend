import React from 'react'
import Container from '../Container'
import Title from '@/components/common/Title'
import DiscountProduct from './DiscountProduct'

const Discount = async () => {
    let data = await fetch("https://fakestoreapi.com/products?limit=10");
  let product = await data.json();
  return (
    <section className="mt-25">
      <Container>
   <Title name="Discount" />
   <div className="flex gap-8.5  mt-8.25">
    <div className="w-63.75 h-89 bg-primary rounded-sm flex flex-col items-center justify-center"> 
        <h2 className="text-[35px] font-bold text-white">$20</h2>
        <h3 className="text-[26px] font-normal text-white">Under Products</h3>
        <h4 className="text-sm font-normal text-white">Limited Time Only</h4>
    </div>
     <DiscountProduct product={product}/>
   </div>
      </Container>
   </section>
  )
}

export default Discount