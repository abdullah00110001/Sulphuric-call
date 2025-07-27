
'use client';

export default function AboutSection() {
  const features = [
    {
      icon: 'ri-lightbulb-line',
      title: 'Creative Innovation',
      description: 'We blend creativity with technology to deliver unique digital solutions that set your brand apart from the competition.'
    },
    {
      icon: 'ri-rocket-line',
      title: 'Fast Delivery',
      description: 'Our agile approach ensures rapid project completion without compromising quality or attention to detail.'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Quality Assurance',
      description: 'Every project undergoes rigorous testing and quality checks to ensure flawless performance across all platforms.'
    },
    {
      icon: 'ri-customer-service-line',
      title: '24/7 Support',
      description: 'Our dedicated support team is always available to assist you with any questions or technical challenges.'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose Sulphuric Call?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're not just another digital agency. We're your strategic partner in building extraordinary digital experiences that drive real business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-slate-800 rounded-2xl flex items-center justify-center mb-6">
                <i className={`${feature.icon} text-2xl text-white`}></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}