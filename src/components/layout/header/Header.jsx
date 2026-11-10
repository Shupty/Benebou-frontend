"use client";
import React, { useState, useEffect } from "react";
import Topheader from "./Topheader";
import Navbar from "./Navbar";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
 setIsScrolled(window.scrollY > 50);
  };
  window.addEventListener('scroll', handleScroll);
   return () => {
    window.removeEventListener('scroll', handleScroll); 
   };
     
    },[])

  return (
    <header className={ `sticky top-0  z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}` }>
      <Topheader
        menuOpen={menuOpen}
        onMenuToggle={() => setMenuOpen((prev) => !prev)}
      />
      <Navbar menuOpen={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  );
};

export default Header;