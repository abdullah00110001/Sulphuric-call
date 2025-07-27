'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-sky-600 cursor-pointer" style={{ fontFamily: "Pacifico, serif" }}>
            Sulphuric Call
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              About
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Services
            </Link>
            <Link href="/portfolio" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Portfolio
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Blog
            </Link>
            <Link href="/team" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Team
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
              Contact
            </Link>
          </div>

          <div className="hidden md:block">
            <Link href="/contact" className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors whitespace-nowrap cursor-pointer">
              Get Quote
            </Link>
          </div>

          <button 
            className="md:hidden w-8 h-8 flex items-center justify-center cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl text-gray-700`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                About
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Services
              </Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Portfolio
              </Link>
              <Link href="/blog" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Blog
              </Link>
              <Link href="/team" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Team
              </Link>
              <Link href="/pricing" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Pricing
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-sky-600 transition-colors cursor-pointer">
                Contact
              </Link>
              <Link href="/contact" className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors whitespace-nowrap cursor-pointer inline-block text-center">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}