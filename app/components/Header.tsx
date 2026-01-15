'use client';

import React, { useEffect, useRef, useState } from 'react';
import '../styles/header.css';

const Header: React.FC = () => {
  const navbarRef = useRef<HTMLElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

      //Effet pour diminuer la navbar au scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY >= 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

      //Effet pour détecter la section visible
  useEffect(() => {
  const sections = document.querySelectorAll('section[id]');

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { threshold: 0.6 }
  );

  sections.forEach((section) => observer.observe(section));

  return () => observer.disconnect();
}, []);

  const navLinks = [
    { href: '#about', label: 'À propos' },
    { href: '#skills', label: 'Compétences' },
    { href: '#experience', label: 'Parcours' },
    { href: '#projet', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav
      ref={navbarRef}
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isScrolled ? 'h-10' : 'h-16'
      }`}
    >
      <div
        className={`mx-auto flex items-center justify-between h-full px-4 ${
          isScrolled ? 'bg-[rgba(230,207,195,0.7)]' : 'bg-[#e6cfc3]'
        }`}
      >
        {/* Logo */}
        <div className='logo text-xl font-bold cursor-pointer select-none MB'>
          <a href='#hero-area'>Mélanie Bruzac</a>
        </div>

        {/* Burger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className='lg:hidden focus:outline-none'
          aria-label='Toggle menu'
          aria-expanded={menuOpen}
        >
          <svg
            className='w-10 h-10 text-black-700'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            {menuOpen ? (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            ) : (
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            )}
          </svg>
        </button>

        {/* Menu desktop */}
        <div className='hidden lg:flex gap-4'>
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');

            return (
              <a
                key={link.href}
                href={link.href}
                className={`
                  px-3 py-2 relative transition-all duration-300
                  text-black
                  after:content-[''] after:absolute after:left-0 after:bottom-0
                  after:h-[2px] after:bg-main after:transition-all after:duration-300
                   after:bg-[#b76e79]
                  ${
                    isActive
                      ? 'text-main after:w-full'
                      : 'after:w-0 hover:after:w-full'
                  }
                `}
              >
                {link.label}
              </a>
            );
          })}
        </div>
        
      </div>

      {/* Menu mobile*/}
      {menuOpen && (
        <div className='lg:hidden fixed  left-0 w-full bg-[#e6cfc3] flex flex-col items-center py-6 gap-6 z-40'>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`
                text-xl font-medium relative transition-all duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-1
                after:h-[2px] after:bg-[#b76e79] after:transition-all after:duration-300
                ${
                  activeSection === link.href.replace('#', '')
                    ? 'text-main after:w-full'
                    : 'after:w-0 hover:after:w-full hover:text-main'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
