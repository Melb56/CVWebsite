'use client'

import React, { useEffect, useRef, useState } from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <nav ref={navbarRef} id="navbar" className={`fixed top-3 w-full transition-all duration-300 z-50 ${isScrolled ? 'h-10' : 'h-16'} flex justify-center items-center`}>
      <div className={`container mx-auto flex items-center justify-between h-full px-4 ${
    isScrolled
      ? 'bg-[rgba(165,204,255,0.7)]'
      : 'bg-[#A5CCFF]'
  }`}>
        {/* Logo */}
        <div className=" logo text-xl font-bold cursor-pointer select-none"><a href="#hero-area">Mélanie Bruzac</a></div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="w-10 h-10 text-black-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <div
          className={`${
            menuOpen ? 'block' : 'hidden'
          }  lg:flex header ${
    isScrolled
      ? 'bg-[rgba(165,204,255,0.7)] lg:bg-transparent'
      : 'bg-[#A5CCFF] lg:bg-transparent'
  }`}>
          <a href="#about" className="block px-3 py-2 " onClick={() => setMenuOpen(false)}>
            À propos
          </a>
          <a href="#skills" className="block px-3 py-2" onClick={() => setMenuOpen(false)}>
            Compétences
          </a>
          <a href="#portfolio" className="block px-3 py-2" onClick={() => setMenuOpen(false)}>
            Projets
          </a>
          <a href="#experience" className="block px-3 py-2" onClick={() => setMenuOpen(false)}>
            Scolarité & Expériences professionnelles
          </a>
          <a href="#contact" className="block px-3 py-2" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
