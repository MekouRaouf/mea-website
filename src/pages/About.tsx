import React from 'react';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Innovation',
      description: 'We continuously innovate to make solar energy more accessible and efficient for everyone.'
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: 'Sustainability',
      description: 'Environmental responsibility is at the core of everything we do, from product design to operations.'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Community',
      description: 'We believe in empowering communities and making clean energy accessible to all economic levels.'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Excellence',
      description: 'We maintain the highest standards in product quality, customer service, and installation practices.'
    }
  ];

  const timeline = [
    {
      year: '2018',
      title: 'Company Founded',
      description: 'Started with a vision to make solar energy accessible to everyone through innovative financing.'
    },
    {
      year: '2019',
      title: 'First PayAsYouGo System',
      description: 'Launched our revolutionary PayAsYouGo solar solution, eliminating upfront costs for customers.'
    },
    {
      year: '2020',
      title: '1,000 Installations',
      description: 'Reached our first milestone of 1,000 solar installations across multiple communities.'
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Secured $10M in Series A funding to expand our operations and technology platform.'
    },
    {
      year: '2022',
      title: 'National Expansion',
      description: 'Expanded operations to 15 states, bringing clean energy to rural and underserved communities.'
    },
    {
      year: '2023',
      title: '5,000 Customers',
      description: 'Celebrated serving over 5,000 satisfied customers with reliable solar energy solutions.'
    },
    {
      year: '2024',
      title: 'AI-Powered Monitoring',
      description: 'Launched advanced AI-powered system monitoring for optimal performance and maintenance.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Powering a 
                <span className="text-green-600"> Sustainable Future</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                MEA-Energy is revolutionizing the renewable energy industry by making solar power accessible 
                to everyone through our innovative PayAsYouGo model. We believe clean energy shouldn't be 
                a luxury – it should be a right.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2018</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5,000+</div>
                  <div className="text-gray-600">Customers</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                alt="Solar panels on roof"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-green-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To democratize access to clean, renewable energy by removing financial barriers 
                and providing innovative PayAsYouGo solar solutions that benefit both people and the planet. 
                We're committed to building a sustainable future where everyone can afford clean energy.
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the leading force in making renewable energy universally accessible, 
                creating a world where clean energy is the norm, not the exception. We envision 
                communities powered by sustainable energy, free from the constraints of traditional 
                utility dependence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These values guide every decision we make and every relationship we build.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From startup to industry leader, here's how we've grown and evolved.
            </p>
          </div>
          
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center font-bold">
                  {item.year}
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact in Numbers</h2>
            <p className="text-xl text-green-100">
              See how we're making a difference in communities and the environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-green-100">Solar Panels Installed</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">50MW</div>
              <div className="text-green-100">Clean Energy Generated</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">100,000</div>
              <div className="text-green-100">Tons CO₂ Prevented</div>
            </div>
            <div className="text-center text-white">
              <div className="text-4xl font-bold mb-2">15</div>
              <div className="text-green-100">States Served</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;