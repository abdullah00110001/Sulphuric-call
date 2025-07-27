'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';
import ProjectModal from '@/components/ProjectModal';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'mobile', label: 'Mobile Apps' },
    { id: 'design', label: 'UI/UX Design' },
    { id: 'ecommerce', label: 'E-commerce' }
  ];

  const projects = [
    {
      id: 1,
      title: 'TechCorp Website Redesign',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Modern%20corporate%20website%20design%20on%20laptop%20screen%2C%20professional%20business%20interface%2C%20clean%20layout%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20contemporary%20web%20design%2C%20sleek%20user%20interface%2C%20professional%20presentation&width=800&height=600&seq=portfolio-1&orientation=landscape',
      description: 'Complete website redesign for a leading technology company, featuring modern design and enhanced user experience.',
      tags: ['React', 'Next.js', 'Tailwind CSS'],
      link: '#'
    },
    {
      id: 2,
      title: 'FitTracker Mobile App',
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20tracking%20mobile%20app%20interface%20on%20smartphone%2C%20workout%20statistics%2C%20health%20metrics%2C%20modern%20app%20design%2C%20sky%20blue%20accent%20colors%2C%20clean%20mobile%20UI%2C%20professional%20app%20presentation&width=800&height=600&seq=portfolio-2&orientation=landscape',
      description: 'Comprehensive fitness tracking app with personalized workout plans and nutrition tracking.',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      link: '#'
    },
    {
      id: 3,
      title: 'EcoShop E-commerce Platform',
      category: 'ecommerce',
      image: 'https://readdy.ai/api/search-image?query=E-commerce%20website%20for%20sustainable%20products%2C%20online%20shopping%20interface%2C%20product%20catalog%2C%20shopping%20cart%2C%20payment%20system%2C%20eco-friendly%20theme%2C%20modern%20e-commerce%20design&width=800&height=600&seq=portfolio-3&orientation=landscape',
      description: 'Sustainable products marketplace with integrated payment system and inventory management.',
      tags: ['Shopify', 'JavaScript', 'Payment Gateway'],
      link: '#'
    },
    {
      id: 4,
      title: 'FinanceApp Dashboard',
      category: 'design',
      image: 'https://readdy.ai/api/search-image?query=Financial%20dashboard%20interface%20design%2C%20charts%20and%20graphs%2C%20data%20visualization%2C%20professional%20financial%20app%2C%20navy%20and%20sky%20blue%20color%20scheme%2C%20modern%20analytics%20interface&width=800&height=600&seq=portfolio-4&orientation=landscape',
      description: 'Intuitive financial dashboard design with comprehensive data visualization and reporting.',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      link: '#'
    },
    {
      id: 5,
      title: 'RestaurantPro Management System',
      category: 'web',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20management%20system%20interface%2C%20order%20tracking%2C%20inventory%20management%2C%20professional%20restaurant%20software%2C%20modern%20web%20application%20design%2C%20clean%20interface&width=800&height=600&seq=portfolio-5&orientation=landscape',
      description: 'Complete restaurant management system with order tracking and inventory management.',
      tags: ['Vue.js', 'Laravel', 'MySQL'],
      link: '#'
    },
    {
      id: 6,
      title: 'TravelBuddy Mobile App',
      category: 'mobile',
      image: 'https://readdy.ai/api/search-image?query=Travel%20planning%20mobile%20app%20interface%2C%20destination%20photos%2C%20trip%20itinerary%2C%20travel%20booking%2C%20modern%20travel%20app%20design%2C%20sky%20blue%20and%20navy%20colors%2C%20professional%20mobile%20interface&width=800&height=600&seq=portfolio-6&orientation=landscape',
      description: 'Travel planning app with itinerary management and booking integration.',
      tags: ['Flutter', 'Firebase', 'Google Maps API'],
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleViewProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <div className="min-h-screen">
        <Header />
        
        <section className="pt-24 pb-16 bg-gradient-to-br from-sky-600 to-slate-800">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-sky-100 max-w-3xl mx-auto">
              Explore our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                    activeFilter === filter.id
                      ? 'bg-sky-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-sky-100'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <button 
                      onClick={() => handleViewProject(project)}
                      className="w-full bg-gradient-to-r from-sky-600 to-slate-800 text-white py-3 rounded-full font-semibold hover:from-sky-700 hover:to-slate-900 transition-all duration-300 whitespace-nowrap"
                    >
                      View Project
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Contact us to discuss your project requirements.
            </p>
            <Link href="/contact" className="bg-gradient-to-r from-sky-600 to-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-sky-700 hover:to-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Start Your Project
            </Link>
          </div>
        </section>

        <Footer />
      </div>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}