'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      icon: 'ri-computer-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with cutting-edge technologies like React, Next.js, and Node.js. We create responsive, fast, and SEO-optimized websites that deliver exceptional user experiences.',
      features: ['Responsive Design', 'SEO Optimization', 'Fast Loading', 'Custom CMS', 'E-commerce Integration'],
      price: 'Starting at $2,500'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile App Development',
      description: 'Native iOS and Android applications, as well as cross-platform solutions using React Native and Flutter. We build apps that engage users and drive business growth.',
      features: ['Native iOS & Android', 'Cross-platform', 'App Store Optimization', 'Push Notifications', 'Analytics Integration'],
      price: 'Starting at $5,000'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences. Our design process focuses on user research, wireframing, prototyping, and testing to ensure optimal results.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      price: 'Starting at $1,500'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies including SEO, social media marketing, content marketing, and PPC advertising to increase your online visibility and drive conversions.',
      features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'PPC Advertising', 'Analytics & Reporting'],
      price: 'Starting at $1,000/month'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms using Shopify, WooCommerce, or custom solutions. We build online stores that convert visitors into customers with seamless shopping experiences.',
      features: ['Payment Integration', 'Inventory Management', 'Order Tracking', 'Customer Analytics', 'Mobile Commerce'],
      price: 'Starting at $3,500'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure using AWS, Google Cloud, or Azure. We help businesses migrate to the cloud and optimize their infrastructure for performance and cost-efficiency.',
      features: ['Cloud Migration', 'Infrastructure Setup', 'Security Implementation', 'Performance Optimization', '24/7 Monitoring'],
      price: 'Starting at $2,000'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs. From concept to launch, we've got you covered.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <i className={`${service.icon} text-2xl text-white`}></i>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-700">
                            <i className="ri-check-line text-green-500 mr-2"></i>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-purple-600">
                          {service.price}
                        </span>
                        <Link href="/contact" className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
                          Get Quote
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create a custom solution that fits your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-700 transition-colors whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
            <button className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}