'use client';

import { useState } from 'react';
import Link from 'next/link';
import ProjectModal from './ProjectModal';

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'Web Development',
      image: 'https://readdy.ai/api/search-image?query=Modern%20e-commerce%20website%20interface%20on%20laptop%20screen%2C%20online%20shopping%20platform%2C%20product%20catalog%2C%20shopping%20cart%2C%20payment%20system%2C%20professional%20e-commerce%20design%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20clean%20layout&width=600&height=400&seq=portfolio-ecommerce&orientation=landscape',
      description: 'Complete e-commerce solution with payment integration and inventory management.',
      tags: ['React', 'Node.js', 'Stripe', 'MongoDB']
    },
    {
      id: 2,
      title: 'Mobile Banking App',
      category: 'Mobile Development',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20banking%20app%20interface%20on%20smartphone%2C%20financial%20dashboard%2C%20transaction%20history%2C%20modern%20banking%20app%20design%2C%20sky%20blue%20accent%20colors%2C%20professional%20mobile%20interface%2C%20clean%20UI%20design&width=600&height=400&seq=portfolio-banking&orientation=landscape',
      description: 'Secure mobile banking application with biometric authentication and real-time transactions.',
      tags: ['React Native', 'Firebase', 'Biometric Auth']
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'Web Design',
      image: 'https://readdy.ai/api/search-image?query=Professional%20corporate%20website%20design%2C%20business%20homepage%2C%20company%20profile%2C%20modern%20corporate%20interface%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20professional%20presentation%2C%20clean%20business%20layout&width=600&height=400&seq=portfolio-corporate&orientation=landscape',
      description: 'Modern corporate website with content management system and SEO optimization.',
      tags: ['Next.js', 'CMS', 'SEO', 'Analytics']
    },
    {
      id: 4,
      title: 'Restaurant Management',
      category: 'Web Application',
      image: 'https://readdy.ai/api/search-image?query=Restaurant%20management%20system%20interface%2C%20order%20tracking%2C%20inventory%20management%2C%20professional%20restaurant%20software%2C%20modern%20web%20application%20design%2C%20sky%20blue%20accent%20colors%2C%20clean%20dashboard&width=600&height=400&seq=portfolio-restaurant&orientation=landscape',
      description: 'Comprehensive restaurant management system with POS integration and analytics.',
      tags: ['Vue.js', 'Laravel', 'POS Integration']
    },
    {
      id: 5,
      title: 'Fitness Tracking App',
      category: 'Mobile Development',
      image: 'https://readdy.ai/api/search-image?query=Fitness%20tracking%20mobile%20app%20interface%2C%20workout%20statistics%2C%20health%20metrics%2C%20exercise%20tracking%2C%20modern%20fitness%20app%20design%2C%20sky%20blue%20and%20navy%20colors%2C%20professional%20mobile%20UI&width=600&height=400&seq=portfolio-fitness&orientation=landscape',
      description: 'Personal fitness tracking app with workout plans and progress monitoring.',
      tags: ['Flutter', 'Health APIs', 'Analytics']
    },
    {
      id: 6,
      title: 'Real Estate Platform',
      category: 'Web Development',
      image: 'https://readdy.ai/api/search-image?query=Real%20estate%20website%20interface%2C%20property%20listings%2C%20search%20filters%2C%20modern%20real%20estate%20platform%20design%2C%20professional%20property%20website%2C%20sky%20blue%20accent%20colors%2C%20clean%20layout&width=600&height=400&seq=portfolio-realestate&orientation=landscape',
      description: 'Property listing platform with advanced search and virtual tour integration.',
      tags: ['React', 'Maps API', 'Search Engine']
    }
  ];

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
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Recent Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover some of our latest projects and see how we've helped businesses achieve their digital goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-sm text-sky-600 font-medium mb-2 block">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <button 
                    onClick={() => handleViewProject(project)}
                    className="text-sky-600 font-semibold hover:text-slate-800 transition-colors cursor-pointer"
                  >
                    View Project →
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/portfolio" className="bg-gradient-to-r from-sky-600 to-slate-800 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-sky-700 hover:to-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}