'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Project {
  id?: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags?: string[];
  link?: string;
  details?: {
    client: string;
    duration: string;
    technologies: string[];
    challenges: string;
    solution: string;
    results: string;
  };
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  if (!isOpen || !project) return null;

  const defaultDetails = {
    client: project.title.includes('TechCorp') ? 'TechCorp Industries' : 
           project.title.includes('FitTracker') ? 'FitLife Solutions' :
           project.title.includes('EcoShop') ? 'EcoShop Marketplace' :
           project.title.includes('FinanceApp') ? 'FinanceApp Inc.' :
           project.title.includes('RestaurantPro') ? 'RestaurantPro Chain' :
           project.title.includes('TravelBuddy') ? 'TravelBuddy Co.' :
           'Confidential Client',
    duration: '3-6 months',
    technologies: project.tags || ['React', 'Node.js', 'MongoDB'],
    challenges: 'The client needed a modern, scalable solution that could handle high traffic while maintaining excellent user experience.',
    solution: 'We developed a comprehensive solution using cutting-edge technologies and best practices, focusing on performance, scalability, and user engagement.',
    results: 'The project resulted in a 40% increase in user engagement, 60% improvement in page load times, and 35% boost in conversion rates.'
  };

  const details = project.details || defaultDetails;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors z-10 cursor-pointer"
          >
            <i className="ri-close-line text-xl text-gray-600"></i>
          </button>
          
          <div className="h-64 overflow-hidden">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>

        <div className="p-8">
          <div className="mb-6">
            <span className="text-sm text-sky-600 font-medium mb-2 block">
              {project.category}
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {project.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Project Details</h3>
              <div className="space-y-3">
                <div>
                  <span className="text-sm font-semibold text-gray-700">Client:</span>
                  <p className="text-gray-600">{details.client}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Duration:</span>
                  <p className="text-gray-600">{details.duration}</p>
                </div>
                <div>
                  <span className="text-sm font-semibold text-gray-700">Technologies:</span>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {details.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Challenge</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {details.challenges}
              </p>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Solution</h3>
              <p className="text-gray-600 leading-relaxed">
                {details.solution}
              </p>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Results</h3>
            <p className="text-gray-600 leading-relaxed">
              {details.results}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/contact" 
              className="bg-gradient-to-r from-sky-600 to-slate-800 text-white px-8 py-3 rounded-full font-semibold hover:from-sky-700 hover:to-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
            >
              Start Similar Project
            </Link>
            <Link 
              href="/portfolio" 
              className="border-2 border-sky-600 text-sky-600 px-8 py-3 rounded-full font-semibold hover:bg-sky-600 hover:text-white transition-all duration-300 whitespace-nowrap cursor-pointer text-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}