import React from 'react';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Sarah has over 15 years of experience in renewable energy and sustainable technology. She founded MEA-Energy with the vision of making clean energy accessible to everyone.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@mea-energy.com'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Michael leads our technology innovation with expertise in IoT, AI, and energy systems. He has been instrumental in developing our PayAsYouGo platform.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'michael@mea-energy.com'
    },
    {
      name: 'Emma Rodriguez',
      role: 'Head of Operations',
      bio: 'Emma oversees all installation and maintenance operations. Her background in logistics and project management ensures smooth deployment of solar systems.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'emma@mea-energy.com'
    },
    {
      name: 'David Kumar',
      role: 'Chief Financial Officer',
      bio: 'David brings extensive experience in financial services and clean energy financing. He developed our innovative PayAsYouGo financial models.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'david@mea-energy.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'VP of Marketing',
      bio: 'Lisa leads our marketing efforts and community outreach. She is passionate about educating people on the benefits of renewable energy.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'lisa@mea-energy.com'
    },
    {
      name: 'James Wilson',
      role: 'Head of Engineering',
      bio: 'James oversees the technical implementation and quality assurance of our solar installations. He ensures every system meets our high standards.',
      image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'james@mea-energy.com'
    },
    {
      name: 'Maria Garcia',
      role: 'Customer Success Director',
      bio: 'Maria ensures our customers have an exceptional experience from installation through ongoing support. She leads our 24/7 customer service team.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'maria@mea-energy.com'
    },
    {
      name: 'Robert Park',
      role: 'VP of Business Development',
      bio: 'Robert drives strategic partnerships and business expansion. His network in the energy sector has been key to our rapid growth.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'robert@mea-energy.com'
    },
    {
      name: 'Dr. Amanda Foster',
      role: 'Head of Research & Development',
      bio: 'Amanda leads our R&D efforts, focusing on next-generation solar technology and energy storage solutions. She holds a PhD in Materials Science.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'amanda@mea-energy.com'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Alan Greenspan',
      role: 'Energy Policy Advisor',
      company: 'Former Department of Energy',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Jennifer Liu',
      role: 'Technology Advisor',
      company: 'Former Tesla Executive',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: 'Financial Advisor',
      company: 'Clean Energy Ventures',
      image: 'https://images.pexels.com/photos/1181562/pexels-photo-1181562.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet Our 
            <span className="text-green-600"> Expert Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our passionate team of professionals brings together expertise in renewable energy, 
            technology, finance, and operations to deliver exceptional solar solutions.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-600">
              Experienced leaders driving innovation in renewable energy.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{member.bio}</p>
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-blue-400 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-green-600 transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Board */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advisory Board</h2>
            <p className="text-lg text-gray-600">
              Industry veterans providing strategic guidance and expertise.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <img
                  src={advisor.image}
                  alt={advisor.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{advisor.name}</h3>
                  <p className="text-green-600 font-medium mb-1">{advisor.role}</p>
                  <p className="text-gray-600 text-sm">{advisor.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Mission</h2>
          <p className="text-xl text-green-100 mb-8">
            We're always looking for passionate individuals who want to help us build a sustainable future. 
            Join our team and make a real impact in the renewable energy industry.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@mea-energy.com"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              View Open Positions
            </a>
            <a
              href="mailto:careers@mea-energy.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;