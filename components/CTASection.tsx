
'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-600 to-slate-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-sky-100 mb-8 max-w-3xl mx-auto">
          Let's discuss your project and see how we can help you achieve your digital goals. Get a free consultation today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/contact" className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Get Free Quote
          </Link>
          <Link href="/about" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors whitespace-nowrap cursor-pointer">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}