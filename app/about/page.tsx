'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function About() {
  const team = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CEO%20founder%20portrait%2C%20confident%20male%20executive%2C%20modern%20office%20background%2C%20business%20suit%2C%20professional%20headshot%2C%20leadership%20presence%2C%20contemporary%20corporate%20photography&width=400&height=400&seq=team-1&orientation=squarish',
      bio: 'With over 10 years of experience in digital transformation, Alex leads our vision of creating exceptional digital experiences.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    },
    {
      name: 'Sarah Chen',
      position: 'Creative Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20creative%20director%20female%20portrait%2C%20artistic%20background%2C%20modern%20creative%20workspace%2C%20professional%20headshot%2C%20design%20industry%2C%20contemporary%20photography&width=400&height=400&seq=team-2&orientation=squarish',
      bio: 'Sarah brings creativity and innovation to every project, ensuring our designs not only look great but also drive results.',
      social: {
        linkedin: '#',
        dribbble: '#'
      }
    },
    {
      name: 'Michael Johnson',
      position: 'Lead Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20software%20developer%20male%20portrait%2C%20tech%20background%2C%20modern%20office%20environment%2C%20casual%20professional%20attire%2C%20coding%20workspace%2C%20contemporary%20tech%20photography&width=400&height=400&seq=team-3&orientation=squarish',
      bio: 'Michael is our technical expert who turns complex ideas into elegant, scalable solutions using the latest technologies.',
      social: {
        linkedin: '#',
        github: '#'
      }
    },
    {
      name: 'Emily Davis',
      position: 'Marketing Strategist',
      image: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20strategist%20female%20portrait%2C%20business%20environment%2C%20modern%20office%20background%2C%20professional%20attire%2C%20marketing%20workspace%2C%20contemporary%20business%20photography&width=400&height=400&seq=team-4&orientation=squarish',
      bio: 'Emily develops comprehensive marketing strategies that help our clients reach their target audience and achieve their goals.',
      social: {
        linkedin: '#',
        twitter: '#'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About Sulphuric Call
          </h1>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            We're a passionate team of digital innovators dedicated to transforming businesses through exceptional design and technology.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2020, Sulphuric Call emerged from a simple belief: that every business deserves a digital presence that truly represents their brand and connects with their audience. We started as a small team of designers and developers who were passionate about creating meaningful digital experiences.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Today, we've grown into a full-service digital agency that has helped over 200 businesses transform their online presence. Our approach combines strategic thinking, creative design, and technical expertise to deliver solutions that not only look great but also drive real business results.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe in building long-term partnerships with our clients, understanding their unique challenges, and creating customized solutions that help them achieve their goals.
              </p>
            </div>
            <div className="relative">
              <img 
                src="https://readdy.ai/api/search-image?query=Modern%20creative%20team%20working%20together%20in%20contemporary%20office%20space%2C%20collaborative%20workspace%2C%20diverse%20professionals%2C%20laptops%20and%20design%20tools%2C%20purple%20and%20blue%20color%20accents%2C%20professional%20business%20environment%2C%20teamwork%20and%20innovation&width=600&height=500&seq=about-story&orientation=landscape"
                alt="Our Story"
                className="rounded-2xl shadow-2xl object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting impact in the digital world.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Deliver exceptional digital experiences that exceed expectations</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Build long-term partnerships based on trust and results</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-check-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Stay at the forefront of technology and design trends</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                To become the leading digital agency that transforms how businesses connect with their customers through innovative technology and design.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Pioneer new approaches to digital transformation</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Create a global impact through local expertise</p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <i className="ri-star-line text-white text-sm"></i>
                  </div>
                  <p className="ml-4 text-gray-700">Foster innovation and creativity in everything we do</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our diverse team of experts brings together years of experience in design, development, and digital marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex space-x-3">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer"
                      >
                        <i className={`ri-${platform}-fill text-white text-sm`}></i>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Work Together?
          </h2>
          <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and see how we can help transform your digital presence.
          </p>
          <Link href="/contact" className="bg-white text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}