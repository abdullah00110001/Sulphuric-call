'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Posts' },
    { id: 'web-development', label: 'Web Development' },
    { id: 'design', label: 'Design' },
    { id: 'marketing', label: 'Marketing' },
    { id: 'technology', label: 'Technology' }
  ];

  const blogPosts = [
    {
      id: 1,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Discover the latest trends shaping the future of web development, from AI integration to progressive web apps.',
      category: 'web-development',
      author: 'Alex Rodriguez',
      date: '2024-01-15',
      readTime: '5 min read',
      image: 'https://readdy.ai/api/search-image?query=Modern%20web%20development%20workspace%20with%20code%20on%20multiple%20monitors%2C%20futuristic%20technology%20interface%2C%20programming%20environment%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20professional%20developer%20setup%2C%20contemporary%20coding%20atmosphere&width=800&height=500&seq=blog-1&orientation=landscape',
      tags: ['React', 'Next.js', 'Web Development']
    },
    {
      id: 2,
      title: 'UI/UX Design Principles That Drive User Engagement',
      excerpt: 'Learn the essential design principles that create engaging user experiences and drive business success.',
      category: 'design',
      author: 'Sarah Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      image: 'https://readdy.ai/api/search-image?query=UI%20UX%20design%20workspace%20with%20wireframes%2C%20design%20tools%2C%20color%20palettes%2C%20modern%20designer%20desk%2C%20creative%20environment%2C%20sky%20blue%20accent%20colors%2C%20professional%20design%20studio%2C%20contemporary%20design%20process&width=800&height=500&seq=blog-2&orientation=landscape',
      tags: ['UI/UX', 'Design', 'User Experience']
    },
    {
      id: 3,
      title: 'Digital Marketing Strategies for Small Businesses',
      excerpt: 'Effective digital marketing strategies that help small businesses compete in the digital marketplace.',
      category: 'marketing',
      author: 'Emily Davis',
      date: '2024-01-10',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Digital%20marketing%20analytics%20dashboard%2C%20social%20media%20campaigns%2C%20marketing%20metrics%2C%20professional%20marketing%20workspace%2C%20sky%20blue%20and%20navy%20theme%2C%20modern%20marketing%20tools%2C%20business%20growth%20concept&width=800&height=500&seq=blog-3&orientation=landscape',
      tags: ['Marketing', 'SEO', 'Social Media']
    },
    {
      id: 4,
      title: 'Building Scalable Mobile Applications with React Native',
      excerpt: 'Best practices for developing scalable mobile applications using React Native framework.',
      category: 'technology',
      author: 'Michael Johnson',
      date: '2024-01-08',
      readTime: '8 min read',
      image: 'https://readdy.ai/api/search-image?query=Mobile%20app%20development%20with%20React%20Native%2C%20smartphone%20interfaces%2C%20coding%20environment%2C%20modern%20mobile%20development%20workspace%2C%20professional%20tech%20setup%2C%20sky%20blue%20accent%20colors&width=800&height=500&seq=blog-4&orientation=landscape',
      tags: ['React Native', 'Mobile Development', 'JavaScript']
    },
    {
      id: 5,
      title: 'The Importance of Website Performance Optimization',
      excerpt: 'Why website performance matters and how to optimize your site for better user experience and SEO.',
      category: 'web-development',
      author: 'Alex Rodriguez',
      date: '2024-01-05',
      readTime: '4 min read',
      image: 'https://readdy.ai/api/search-image?query=Website%20performance%20optimization%20dashboard%2C%20loading%20speed%20metrics%2C%20web%20analytics%2C%20performance%20monitoring%20tools%2C%20professional%20web%20development%20environment%2C%20modern%20tech%20workspace&width=800&height=500&seq=blog-5&orientation=landscape',
      tags: ['Performance', 'SEO', 'Web Development']
    },
    {
      id: 6,
      title: 'Creating Accessible Web Experiences for Everyone',
      excerpt: 'Learn how to design and develop websites that are accessible to users with disabilities.',
      category: 'design',
      author: 'Sarah Chen',
      date: '2024-01-03',
      readTime: '6 min read',
      image: 'https://readdy.ai/api/search-image?query=Web%20accessibility%20design%20tools%2C%20inclusive%20design%20principles%2C%20accessibility%20testing%20interface%2C%20modern%20design%20workspace%2C%20professional%20accessibility%20tools%2C%20sky%20blue%20and%20navy%20color%20scheme&width=800&height=500&seq=blog-6&orientation=landscape',
      tags: ['Accessibility', 'Design', 'Web Standards']
    }
  ];

  const filteredPosts = activeCategory === 'all' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-sky-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and best practices in web development, design, and digital marketing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  activeCategory === category.id
                    ? 'bg-sky-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-sky-100'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article 
                key={post.id}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span>{post.author}</span>
                    <span className="mx-2">•</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="text-sky-600 font-semibold hover:text-slate-800 transition-colors cursor-pointer">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest insights and updates from our team.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-transparent text-sm"
            />
            <button className="bg-gradient-to-r from-sky-600 to-slate-800 text-white px-6 py-3 rounded-full font-semibold hover:from-sky-700 hover:to-slate-900 transition-all duration-300 whitespace-nowrap cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}