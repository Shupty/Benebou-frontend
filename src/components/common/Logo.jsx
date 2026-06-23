import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Image src="/images/logo.png" alt="logo" width={150} height={27}  style={{ width: 'auto', height: 'auto' }}  />    
  )
}

export default Logo