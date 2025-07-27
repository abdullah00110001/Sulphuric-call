
'use client';

export default function ServicesSection() {
  const services = [
    {
      icon: 'ri-computer-line',
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for optimal performance and user experience.',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20multiple%20monitors%20displaying%20responsive%20website%20designs%2C%20coding%20environment%2C%20clean%20desk%20setup%2C%20professional%20developer%20tools%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20high-tech%20atmosphere%2C%20contemporary%20office%20lighting&width=600&height=400&seq=web-dev-navy&orientation=landscape'
    },
    {
      icon: 'ri-smartphone-line',
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth across all devices.',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20concept%20with%20smartphones%20displaying%20various%20app%20interfaces%2C%20modern%20UI%20design%20elements%2C%20sleek%20mobile%20devices%2C%20professional%20tech%20environment%2C%20sky%20blue%20accent%20colors%2C%20minimalist%20background&width=600&height=400&seq=mobile-app-navy&orientation=landscape'
    },
    {
      icon: 'ri-palette-line',
      title: 'UI/UX Design',
      description: 'Beautiful, intuitive designs that create memorable user experiences and convert visitors into loyal customers.',
      image: 'https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20design%20tools%2C%20wireframes%2C%20color%20palettes%2C%20sketch%20pads%2C%20modern%20designer%20desk%2C%20creative%20environment%2C%20sky%20blue%20and%20navy%20color%20accents%2C%20professional%20design%20studio%20atmosphere&width=600&height=400&seq=uiux-design-navy&orientation=landscape'
    },
    {
      icon: 'ri-bar-chart-line',
      title: 'Digital Marketing',
      description: 'Comprehensive digital marketing strategies that increase visibility, drive traffic, and boost conversions.',
      image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%20on%20computer%20screens%2C%20graphs%20and%20charts%2C%20social%20media%20icons%2C%20marketing%20campaign%20visuals%2C%20modern%20office%20environment%2C%20professional%20workspace%2C%20sky%20blue%20and%20navy%20theme&width=600&height=400&seq=marketing-navy&orientation=landscape'
    },
    {
      icon: 'ri-shopping-cart-line',
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms that streamline online sales and provide exceptional shopping experiences.',
      image: 'https://readdy.ai/api/search-image?query=E-commerce%20website%20interface%20on%20laptop%20screen%2C%20online%20shopping%20cart%2C%20product%20displays%2C%20payment%20systems%2C%20modern%20retail%20technology%2C%20clean%20workspace%2C%20professional%20e-commerce%20platform%20design&width=600&height=400&seq=ecommerce-navy&orientation=landscape'
    },
    {
      icon: 'ri-cloud-line',
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and services that ensure your applications run smoothly and securely.',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20computing%20concept%20with%20servers%2C%20data%20centers%2C%20network%20connections%2C%20modern%20technology%20infrastructure%2C%20professional%20IT%20environment%2C%20sky%20blue%20and%20navy%20lighting%2C%20high-tech%20atmosphere&width=600&height=400&seq=cloud-navy&orientation=landscape'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From concept to launch, we provide comprehensive digital solutions that help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-sky-600 to-slate-800 rounded-xl flex items-center justify-center mb-4">
                  <i className={`${service.icon} text-xl text-white`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <button className="text-sky-600 font-semibold hover:text-slate-800 transition-colors cursor-pointer">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}