import React from 'react'
import ShopBannerImage from '@/assets/images/shopBanner.png'

const ShopBanner = () => {
    const shopList=[
        {name:'#STAYHOME'},
        {name:'NEW IN'},
        {name:'JACKETS'},
        {name:'HOODIES'},
        {name:'MEN'},
        {name:'WOMEN'},
        {name:'TROUSERS'},
        {name:'ACCESSORIES'},
        {name:'SHOES'}
    ]
  return (
    <div className='text-center pt-37.5 pb-5 mx-15' style={{ backgroundImage: `url(${ShopBannerImage.src})`, backgroundSize: 'cover', backgroundPosition: 'center',  alignItems: 'center', justifyContent: 'center' }}>
      
<h2 className='text-[60px] font-bold text-primary-black uppercase '>Shoes</h2>
<ul>
   {shopList.map((item,index)=>(
    <li key={index} className='text-white text-[14px] font-medium inline-block mx-2'>{item.name}</li>
   ))}
</ul>
{/* <h5>#STAYHOME      NEW IN      JACKETS      HOODIES      MEN      WOMEN      TROUSERS      ACCESSORIES      SHOES</h5> */}

    </div>
  )
}

export default ShopBanner