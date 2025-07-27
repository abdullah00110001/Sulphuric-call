'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold text-sky-400 mb-4" style={{ fontFamily: "Pacifico, serif" }}>
              Sulphuric Call
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your digital presence with our innovative design and development solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors cursor-pointer">
                <i className="ri-facebook-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors cursor-pointer">
                <i className="ri-twitter-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors cursor-pointer">
                <i className="ri-instagram-fill text-white"></i>
              </a>
              <a href="#" className="w-10 h-10 bg-sky-600 rounded-full flex items-center justify-center hover:bg-sky-700 transition-colors cursor-pointer">
                <i className="ri-linkedin-fill text-white"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors cursor-pointer">About Us</Link></li>
              <li><Link href="/team" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Our Team</Link></li>
              <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Portfolio</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Blog</Link></li>
              <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Web Development</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Mobile Apps</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">UI/UX Design</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">Digital Marketing</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors cursor-pointer">E-commerce</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-sky-400">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <i className="ri-map-pin-line text-sky-400 mr-3"></i>
                <span className="text-gray-300">123 Innovation Street<br />Tech District, CA 94105</span>
              </li>
              <li className="flex items-center">
                <i className="ri-phone-line text-sky-400 mr-3"></i>
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <i className="ri-mail-line text-sky-400 mr-3"></i>
                <span className="text-gray-300">hello@sulphuriccall.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Sulphuric Call. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}