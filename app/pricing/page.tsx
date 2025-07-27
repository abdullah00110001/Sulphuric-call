'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: 'Starter',
      description: 'Perfect for small businesses getting started',
      monthlyPrice: 299,
      annualPrice: 2990,
      features: [
        'Responsive Website Design',
        'Up to 5 Pages',
        'Basic SEO Setup',
        'Contact Form Integration',
        'Mobile Optimization',
        '30 Days Support',
        'SSL Certificate',
        'Basic Analytics Setup'
      ],
      popular: false,
      color: 'sky'
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      monthlyPrice: 699,
      annualPrice: 6990,
      features: [
        'Everything in Starter',
        'Up to 15 Pages',
        'Advanced SEO Optimization',
        'E-commerce Integration',
        'Blog Setup',
        'Social Media Integration',
        '90 Days Support',
        'Advanced Analytics',
        'Content Management System',
        'Email Marketing Setup'
      ],
      popular: true,
      color: 'slate'
    },
    {
      name: 'Enterprise',
      description: 'For large businesses and organizations',
      monthlyPrice: 1299,
      annualPrice: 12990,
      features: [
        'Everything in Professional',
        'Unlimited Pages',
        'Custom Web Application',
        'Advanced E-commerce Features',
        'Multi-language Support',
        'API Integration',
        '6 Months Support',
        'Custom Analytics Dashboard',
        'Performance Optimization',
        'Security Audit',
        'Priority Support'
      ],
      popular: false,
      color: 'sky'
    }
  ];

  const addOns = [
    {
      name: 'Mobile App Development',
      description: 'Native iOS and Android applications',
      price: 4999,
      icon: 'ri-smartphone-line'
    },
    {
      name: 'Advanced SEO Package',
      description: 'Comprehensive SEO optimization and monitoring',
      price: 899,
      icon: 'ri-search-line'
    },
    {
      name: 'Social Media Management',
      description: 'Complete social media strategy and management',
      price: 699,
      icon: 'ri-facebook-circle-line'
    },
    {
      name: 'Content Creation',
      description: 'Professional content writing and photography',
      price: 999,
      icon: 'ri-file-text-line'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-sky-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto mb-8">
            Choose the perfect plan for your business needs. No hidden fees, no surprises.
          </p>
          
          <div className="flex items-center justify-center gap-4 mb-8">
            <span className={`font-semibold ${!isAnnual ? 'text-white' : 'text-sky-200'}`}>
              Monthly
            </span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative w-16 h-8 rounded-full transition-all duration-300 cursor-pointer ${
                isAnnual ? 'bg-white' : 'bg-sky-700'
              }`}
            >
              <div className={`absolute w-6 h-6 rounded-full bg-sky-600 top-1 transition-all duration-300 ${
                isAnnual ? 'left-9' : 'left-1'
              }`}></div>
            </button>
            <span className={`font-semibold ${isAnnual ? 'text-white' : 'text-sky-200'}`}>
              Annual
            </span>
            {isAnnual && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Save 20%
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden ${
                  plan.popular ? 'border-2 border-sky-600 transform scale-105' : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-sky-600 to-slate-800 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {plan.name}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">
                        ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                      </span>
                      <span className="text-gray-600 ml-2">
                        {isAnnual ? '/year' : '/month'}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <i className="ri-check-line text-green-500 text-lg mr-3 mt-0.5"></i>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href="/contact"
                    className={`w-full block text-center py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-sky-600 to-slate-800 text-white hover:from-sky-700 hover:to-slate-900' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Add-On Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your package with additional services tailored to your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {addOns.map((addOn, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-slate-800 rounded-xl flex items-center justify-center flex-shrink-0">
                    <i className={`${addOn.icon} text-xl text-white`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {addOn.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {addOn.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-sky-600">
                        ${addOn.price}
                      </span>
                      <button className="bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition-colors whitespace-nowrap cursor-pointer">
                        Add to Plan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our pricing? We've got answers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What's included in the support period?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Our support includes bug fixes, minor updates, content updates, and technical assistance. We're here to ensure your website runs smoothly.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Absolutely! You can upgrade your plan at any time. We'll work with you to ensure a smooth transition with no downtime.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Do you offer custom solutions?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Yes, we create custom solutions tailored to your specific needs. Contact us to discuss your requirements and get a personalized quote.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We accept all major credit cards, PayPal, and bank transfers. Payment plans are available for larger projects.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            Choose your plan and let's transform your digital presence together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors whitespace-nowrap cursor-pointer">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}