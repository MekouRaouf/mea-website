import React from 'react';
import { useTranslation } from 'react-i18next';
import { Target, Eye, Award, Users, Lightbulb, Heart } from 'lucide-react';

const About = () => {

  const { t } = useTranslation();
  
  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('about.values.innovation.title'),
      description: t('about.values.innovation.description')
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: t('about.values.sustainability.title'),
      description: t('about.values.sustainability.description')
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: t('about.values.community.title'),
      description: t('about.values.community.description')
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: t('about.values.excellence.title'),
      description: t('about.values.excellence.description')
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: t('about.journey.2024.title'),
      description: t('about.journey.2024.description')
    },
    {
      year: '2025',
      title: t('about.journey.2025.title'),
      description: t('about.journey.2025.description')
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
                {t('about.hero.title')}
                <span className="text-green-600"> {t('about.hero.subtitle')}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t('about.hero.description1')}
              </p>
              <p className="text-xl text-gray-600 mb-8">
                {t('about.hero.description2')}
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">2025</div>
                  <div className="text-gray-600">{t('about.hero.founded')}</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600">5,000+</div>
                  <div className="text-gray-600">{t('about.hero.customers')}</div>
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
                <h2 className="text-3xl font-bold text-gray-900">{t('about.mission.title')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.mission.description')}
              </p>
            </div>
            
            <div className="bg-blue-50 p-8 rounded-lg">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900">{t('about.vision.title')}</h2>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('about.vision.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.values.title')}</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('about.values.description')}.
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">{t('about.journey.title')}</h2>
            <p className="text-lg text-gray-600">
              {t('about.journey.description')}
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