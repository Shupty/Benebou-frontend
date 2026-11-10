import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import React from 'react'

export const metadata = {
  title: 'Benebou | Home',
  description: 'This is the home page',
}

const Mainlayout = ({children}) => {
  return (
    <>
    <Header />
    {children}
    <Footer/>   
    </>
  )
}

export default Mainlayout