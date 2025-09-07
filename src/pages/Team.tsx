import React from 'react';
import { useTranslation } from 'react-i18next';
import { Linkedin, Twitter, Mail } from 'lucide-react';

const Team = () => {

    const { t } = useTranslation();
  
  const teamMembers = [
    {
      name: 'Dr. Njikatoufon Abdel Ganir',
      role: t('team.leadership.leader1.role'),
      bio: t('team.leadership.leader1.bio'),
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'sarah@mea-energy.com'
    },
    {
      name: 'Michael Chen',
      role: t('team.leadership.leader2.role'),
      bio: t('team.leadership.leader2.bio'),
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'michael@mea-energy.com'
    },
    {
      name: 'Emma Rodriguez',
      role: t('team.leadership.leader3.role'),
      bio: t('team.leadership.leader3.bio'),
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop',
      linkedin: '#',
      twitter: '#',
      email: 'emma@mea-energy.com'
    }
  ];

  const advisors = [
    {
      name: 'Dr. Alan Greenspan',
      role: t('team.advisory.advisor1.role'),
      company: 'Former Department of Energy',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Jennifer Liu',
      role: t('team.advisory.advisor2.role'),
      company: 'Former Tesla Executive',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Marcus Johnson',
      role: t('team.advisory.advisor3.role'),
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
            {t('team.hero.title')} 
            <span className="text-green-600">{t('team.hero.subtitle')} </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('team.hero.description')}
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('team.leadership.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('team.leadership.description')}
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('team.advisory.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('team.advisory.description')}
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
          <h2 className="text-4xl font-bold text-white mb-6">{t('team.join.title')}</h2>
          <p className="text-xl text-green-100 mb-8">
            {t('team.join.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:careers@mea-energy.com"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
            >
              {t('team.join.viewPositions')}
            </a>
            <a
              href="mailto:careers@mea-energy.com"
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
            >
              {t('team.join.sendResume')}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;