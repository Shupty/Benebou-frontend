import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" aria-label="Logo" >
      <Image src="/images/logo.png" alt="logo" width={150} height={27}  style={{ width: 'auto', height: 'auto' }}  />    
    </Link>
  )
}

export default Logo