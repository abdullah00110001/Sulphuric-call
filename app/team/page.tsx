'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Team() {
  const team = [
    {
      name: 'Alex Rodriguez',
      position: 'CEO & Founder',
      image: 'https://readdy.ai/api/search-image?query=Professional%20CEO%20founder%20portrait%2C%20confident%20male%20executive%20in%20modern%20office%2C%20business%20suit%2C%20leadership%20presence%2C%20sky%20blue%20and%20navy%20professional%20atmosphere%2C%20contemporary%20corporate%20photography%2C%20professional%20headshot&width=500&height=600&seq=team-alex&orientation=portrait',
      bio: 'With over 12 years of experience in digital transformation and business strategy, Alex leads our vision of creating exceptional digital experiences that drive real business growth.',
      expertise: ['Business Strategy', 'Digital Transformation', 'Leadership', 'Client Relations'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'alex@sulphuriccall.com'
      }
    },
    {
      name: 'Sarah Chen',
      position: 'Creative Director',
      image: 'https://readdy.ai/api/search-image?query=Professional%20creative%20director%20female%20portrait%2C%20artistic%20background%20with%20design%20elements%2C%20modern%20creative%20workspace%2C%20professional%20headshot%2C%20design%20industry%20professional%2C%20sky%20blue%20accent%20colors%2C%20contemporary%20photography&width=500&height=600&seq=team-sarah&orientation=portrait',
      bio: 'Sarah brings 8 years of creative expertise to every project, ensuring our designs not only look stunning but also deliver exceptional user experiences and drive conversions.',
      expertise: ['UI/UX Design', 'Brand Identity', 'Creative Strategy', 'Design Systems'],
      social: {
        linkedin: '#',
        dribbble: '#',
        email: 'sarah@sulphuriccall.com'
      }
    },
    {
      name: 'Michael Johnson',
      position: 'Lead Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20software%20developer%20male%20portrait%2C%20tech%20background%20with%20coding%20elements%2C%20modern%20office%20environment%2C%20casual%20professional%20attire%2C%20coding%20workspace%2C%20sky%20blue%20and%20navy%20color%20scheme%2C%20contemporary%20tech%20photography&width=500&height=600&seq=team-michael&orientation=portrait',
      bio: 'Michael is our technical architect with 10 years of experience, turning complex ideas into elegant, scalable solutions using cutting-edge technologies and best practices.',
      expertise: ['Full-Stack Development', 'React/Next.js', 'Node.js', 'Cloud Architecture'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'michael@sulphuriccall.com'
      }
    },
    {
      name: 'Emily Davis',
      position: 'Marketing Strategist',
      image: 'https://readdy.ai/api/search-image?query=Professional%20marketing%20strategist%20female%20portrait%2C%20business%20environment%20with%20marketing%20elements%2C%20modern%20office%20background%2C%20professional%20attire%2C%20marketing%20workspace%2C%20sky%20blue%20accent%20colors%2C%20contemporary%20business%20photography&width=500&height=600&seq=team-emily&orientation=portrait',
      bio: 'Emily develops comprehensive marketing strategies with 7 years of experience, helping our clients reach their target audience and achieve measurable business growth.',
      expertise: ['Digital Marketing', 'SEO/SEM', 'Content Strategy', 'Analytics'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'emily@sulphuriccall.com'
      }
    },
    {
      name: 'David Kim',
      position: 'Mobile App Developer',
      image: 'https://readdy.ai/api/search-image?query=Professional%20mobile%20app%20developer%20male%20portrait%2C%20tech%20environment%20with%20mobile%20devices%2C%20modern%20workspace%2C%20professional%20attire%2C%20mobile%20development%20setup%2C%20sky%20blue%20and%20navy%20theme%2C%20contemporary%20tech%20photography&width=500&height=600&seq=team-david&orientation=portrait',
      bio: 'David specializes in creating innovative mobile applications with 6 years of experience in React Native and Flutter, delivering seamless user experiences across platforms.',
      expertise: ['React Native', 'Flutter', 'Mobile UI/UX', 'App Store Optimization'],
      social: {
        linkedin: '#',
        github: '#',
        email: 'david@sulphuriccall.com'
      }
    },
    {
      name: 'Jessica Wang',
      position: 'Project Manager',
      image: 'https://readdy.ai/api/search-image?query=Professional%20project%20manager%20female%20portrait%2C%20business%20environment%20with%20project%20management%20elements%2C%20modern%20office%20background%2C%20professional%20attire%2C%20organizational%20workspace%2C%20sky%20blue%20accent%20colors%2C%20contemporary%20business%20photography&width=500&height=600&seq=team-jessica&orientation=portrait',
      bio: 'Jessica ensures smooth project delivery with 5 years of experience in agile methodologies, keeping teams aligned and projects on track from conception to launch.',
      expertise: ['Project Management', 'Agile/Scrum', 'Team Coordination', 'Client Communication'],
      social: {
        linkedin: '#',
        twitter: '#',
        email: 'jessica@sulphuriccall.com'
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-24 pb-16 bg-gradient-to-br from-sky-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Meet Our Team
          </h1>
          <p className="text-xl text-sky-100 max-w-3xl mx-auto">
            Our diverse team of experts brings together years of experience in design, development, and digital marketing to deliver exceptional results.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div key={index} className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sky-600 font-semibold mb-4 text-lg">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {member.bio}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Expertise:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="px-3 py-1 bg-sky-100 text-sky-700 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    {Object.entries(member.social).map(([platform, url]) => (
                      <a 
                        key={platform}
                        href={url}
                        className="w-10 h-10 bg-gradient-to-br from-sky-600 to-slate-800 rounded-full flex items-center justify-center hover:from-sky-700 hover:to-slate-900 transition-all duration-300 cursor-pointer"
                      >
                        <i className={`ri-${platform}-fill text-white text-lg`}></i>
                      </a>
                    ))}
                  </div>
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
              Why Our Team Stands Out
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We bring together diverse expertise and a shared passion for creating exceptional digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-lightbulb-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation First</h3>
              <p className="text-gray-600 leading-relaxed">
                We stay ahead of industry trends and continuously learn new technologies to deliver cutting-edge solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-team-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Collaborative Spirit</h3>
              <p className="text-gray-600 leading-relaxed">
                Our team works seamlessly together, combining different perspectives to create comprehensive solutions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-600 to-slate-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <i className="ri-customer-service-line text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Focused</h3>
              <p className="text-gray-600 leading-relaxed">
                We prioritize understanding your business goals and delivering solutions that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-sky-600 to-slate-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Our Growing Team
          </h2>
          <p className="text-xl text-sky-100 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-sky-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap cursor-pointer">
              View Open Positions
            </Link>
            <Link href="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-slate-800 transition-colors whitespace-nowrap cursor-pointer">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}