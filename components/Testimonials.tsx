'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      position: 'CEO, TechStart Solutions',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businesswoman%20CEO%20portrait%2C%20confident%20female%20executive%2C%20modern%20office%20background%2C%20professional%20headshot%2C%20business%20suit%2C%20leadership%20presence%2C%20sky%20blue%20and%20navy%20professional%20atmosphere&width=400&height=400&seq=testimonial-1&orientation=squarish',
      content: 'Sulphuric Call transformed our outdated website into a modern, user-friendly platform that increased our online conversions by 300%. Their team understood our vision perfectly and delivered beyond our expectations.',
      rating: 5
    },
    {
      name: 'Robert Chen',
      position: 'Founder, EcoGreen Products',
      image: 'https://readdy.ai/api/search-image?query=Professional%20businessman%20founder%20portrait%2C%20confident%20male%20executive%2C%20modern%20office%20environment%2C%20professional%20headshot%2C%20business%20attire%2C%20contemporary%20corporate%20photography%2C%20sky%20blue%20accent%20colors&width=400&height=400&seq=testimonial-2&orientation=squarish',
      content: 'The mobile app they developed for our e-commerce business is exceptional. The user interface is intuitive, and the performance is outstanding. Our customers love the seamless shopping experience.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Marketing Director, Creative Agency',
      image: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20director%20female%20portrait%2C%20creative%20professional%2C%20modern%20workplace%20background%2C%20professional%20headshot%2C%20business%20casual%20attire%2C%20marketing%20industry%20professional%2C%20sky%20blue%20theme&width=400&height=400&seq=testimonial-3&orientation=squarish',
      content: 'Working with Sulphuric Call was a game-changer for our brand. Their creative approach and attention to detail resulted in a website that perfectly captures our brand identity and engages our target audience.',
      rating: 5
    },
    {
      name: 'Michael Rodriguez',
      position: 'Owner, Local Restaurant Chain',
      image: 'https://readdy.ai/api/search-image?query=Professional%20restaurant%20owner%20male%20portrait%2C%20business%20owner%2C%20modern%20restaurant%20background%2C%20professional%20headshot%2C%20business%20attire%2C%20hospitality%20industry%20professional%2C%20sky%20blue%20and%20navy%20colors&width=400&height=400&seq=testimonial-4&orientation=squarish',
      content: 'The restaurant management system they built streamlined our operations completely. From inventory management to order tracking, everything is now automated and efficient. Highly recommended!',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      position: 'Director, Healthcare Services',
      image: 'https://readdy.ai/api/search-image?query=Professional%20healthcare%20director%20female%20portrait%2C%20medical%20professional%2C%20modern%20healthcare%20facility%20background%2C%20professional%20headshot%2C%20business%20attire%2C%20healthcare%20industry%2C%20sky%20blue%20accent%20colors&width=400&height=400&seq=testimonial-5&orientation=squarish',
      content: 'The patient portal they developed improved our patient engagement significantly. The secure, user-friendly interface makes it easy for patients to access their information and communicate with our staff.',
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with us.
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="max-w-4xl mx-auto">
                    <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-8 md:p-12 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="ri-star-fill text-yellow-400 text-xl"></i>
                        ))}
                      </div>
                      <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                        "{testimonial.content}"
                      </blockquote>
                      <div className="flex items-center justify-center">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover object-top mr-4"
                        />
                        <div className="text-left">
                          <h4 className="text-lg font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-sky-600 font-semibold">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-left-line text-xl text-gray-600"></i>
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <i className="ri-arrow-right-line text-xl text-gray-600"></i>
          </button>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide ? 'bg-sky-600' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}