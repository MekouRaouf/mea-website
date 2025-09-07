import React from 'react';
import { useTranslation } from 'react-i18next';
import { BarChart3, Lightbulb, FileText, Users, GraduationCap, Target, TrendingUp, Building, Globe, Award } from 'lucide-react';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      id: 1,
      icon: <BarChart3 className="w-8 h-8" />,
      title: t('services.service1.title'),
      objective: t('services.service1.objective'),
      offerings: t('services.service1.offerings', { returnObjects: true }) as string[],
      clients: t('services.service1.clients'),
      benefit: t('services.service1.benefit'),
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      icon: <TrendingUp className="w-8 h-8" />,
      title: t('services.service2.title'),
      objective: t('services.service2.objective'),
      offerings: t('services.service2.offerings', { returnObjects: true }) as string[],
      clients: t('services.service2.clients'),
      benefit: t('services.service2.benefit'),
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 3,
      icon: <FileText className="w-8 h-8" />,
      title: t('services.service3.title'),
      objective: t('services.service3.objective'),
      offerings: t('services.service3.offerings', { returnObjects: true }) as string[],
      clients: t('services.service3.clients'),
      benefit: t('services.service3.benefit'),
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 4,
      icon: <Globe className="w-8 h-8" />,
      title: t('services.service4.title'),
      objective: t('services.service4.objective'),
      offerings: t('services.service4.offerings', { returnObjects: true }) as string[],
      clients: t('services.service4.clients'),
      benefit: t('services.service4.benefit'),
      color: "from-orange-500 to-red-500"
    },
    {
      id: 5,
      icon: <GraduationCap className="w-8 h-8" />,
      title: t('services.service5.title'),
      objective: t('services.service5.objective'),
      offerings: t('services.service5.offerings', { returnObjects: true }) as string[],
      clients: t('services.service5.clients'),
      benefit: t('services.service5.benefit'),
      color: "from-teal-500 to-green-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 via-blue-600 to-purple-700 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {t('services.title')}
            </h1>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl md:text-2xl mb-8 leading-relaxed">
                {t('services.subtitle')}
              </p>
              <p className="text-lg md:text-xl opacity-90 leading-relaxed">
                {t('services.mission')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {t('services.areas_title')}
            </h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              {t('services.areas_subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={service.id} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
                    {/* Service Header */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-6`}>
                        <div className="text-white">
                          {service.icon}
                        </div>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {index + 1}. {service.title}
                      </h3>
                      <div className="bg-gray-50 p-6 rounded-xl">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Target className="w-5 h-5 mr-2 text-blue-600" />
                          {t('services.service1.objective').includes('Fornire') ? 'Obiettivo' : 'Objective'}
                        </h4>
                        <p className="text-gray-700 leading-relaxed">
                          {service.objective}
                        </p>
                      </div>
                    </div>

                    {/* Service Details */}
                    <div className="lg:w-2/3 space-y-8">
                      {/* What We Offer */}
                      <div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                          <Lightbulb className="w-6 h-6 mr-2 text-yellow-500" />
                          {t('services.service1.objective').includes('Fornire') ? 'Cosa offriamo' : 'What we offer'}
                        </h4>
                        <ul className="space-y-3">
                          {service.offerings.map((offering, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-2 h-2 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                              <span className="text-gray-700">{offering}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Clients and Benefits */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 p-6 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Users className="w-5 h-5 mr-2 text-blue-600" />
                            {t('services.service1.objective').includes('Fornire') ? 'Clienti' : 'Clients'}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {service.clients}
                          </p>
                        </div>
                        <div className="bg-green-50 p-6 rounded-xl">
                          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                            <Award className="w-5 h-5 mr-2 text-green-600" />
                            {t('services.service1.objective').includes('Fornire') ? 'Beneficio per il cliente' : 'Client benefit'}
                          </h4>
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {service.benefit}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('services.cta.title')}
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            {t('services.cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200">
              {t('services.cta.consultation')}
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200">
              {t('services.cta.brochure')}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;