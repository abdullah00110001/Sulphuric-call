
'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section 
      className="min-h-screen flex items-center relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(30, 41, 59, 0.8)), url('https://readdy.ai/api/search-image?query=Modern%20digital%20agency%20office%20space%20with%20creative%20professionals%20working%20on%20laptops%20and%20computers%2C%20contemporary%20workspace%20with%20large%20windows%2C%20natural%20lighting%2C%20minimalist%20design%2C%20professional%20atmosphere%2C%20sky%20blue%20and%20navy%20accent%20colors%2C%20clean%20and%20organized%20environment%2C%20technology%20and%20innovation%20theme%2C%20high-quality%20photography&width=1920&height=1080&seq=hero-bg-navy&orientation=landscape')`
      }}
    >
      <div className="w-full px-6 py-20">
        <div className="max-w-7xl mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Transform Your Digital
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-300">
              Presence
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-gray-100">
            We craft exceptional digital experiences that elevate your brand and drive meaningful results through innovative design and cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-sky-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-sky-700 hover:to-blue-700 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
              View Our Work
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}