import React from 'react';
import { Sun, Battery, Smartphone, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Residential Solar System',
      description: 'Complete solar solution for homes with high-efficiency panels and smart inverters.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['High-efficiency solar panels', 'Smart inverter technology', '25-year warranty', 'Professional installation'],
      specs: { power: '3-10 kW', efficiency: '21.2%', warranty: '25 years' }
    },
    {
      name: 'Commercial Solar Solution',
      description: 'Scalable solar systems designed for businesses and commercial properties.',
      image: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Scalable design', 'Commercial-grade components', 'Performance monitoring', 'Tax incentive assistance'],
      specs: { power: '10-500 kW', efficiency: '22.1%', warranty: '25 years' }
    },
    {
      name: 'Energy Storage System',
      description: 'Advanced battery storage to maximize your solar energy independence.',
      image: 'https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      features: ['Lithium-ion battery', 'Smart energy management', 'Backup power capability', 'Mobile app control'],
      specs: { capacity: '5-20 kWh', cycles: '6000+', warranty: '10 years' }
    }
  ];

  const features = [
    {
      icon: <Sun className="h-8 w-8" />,
      title: 'High Efficiency Panels',
      description: 'Our premium solar panels achieve up to 22.1% efficiency, maximizing energy production.'
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Smart Monitoring',
      description: 'Real-time monitoring through our mobile app lets you track performance anywhere.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Comprehensive Warranty',
      description: '25-year panel warranty and 10-year installation warranty for complete peace of mind.'
    },
    {
      icon: <Battery className="h-8 w-8" />,
      title: 'Energy Storage',
      description: 'Optional battery storage systems provide backup power and energy independence.'
    }
  ];

  const certifications = [
    'IEC 61215 Certified',
    'IEC 61730 Safety Standard',
    'UL Listed Components',
    'ISO 9001:2015 Quality Management',
    'NABCEP Certified Installers',
    '25-Year Performance Guarantee'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Premium Solar 
            <span className="text-green-600"> Products</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover our range of high-quality solar products designed to maximize energy production 
            and provide reliable clean energy for your home or business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
              Get Product Quote
            </button>
            <button className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Product Showcase */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
            <p className="text-lg text-gray-600">
              Premium solar solutions tailored to meet diverse energy needs.
            </p>
          </div>
          
          <div className="space-y-16">
            {products.map((product, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <h3 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h3>
                  <p className="text-lg text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{product.specs.power}</div>
                      <div className="text-sm text-gray-600">Power Output</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{product.specs.efficiency}</div>
                      <div className="text-sm text-gray-600">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{product.specs.warranty}</div>
                      <div className="text-sm text-gray-600">Warranty</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Learn More
                  </button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-lg shadow-2xl w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products</h2>
            <p className="text-lg text-gray-600">
              Advanced technology and superior quality make our solar products the smart choice.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="text-green-600 mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Proven Performance</h2>
              <p className="text-lg text-gray-600 mb-8">
                Our solar products have been rigorously tested and proven to deliver exceptional 
                performance in real-world conditions. Here's what makes them stand out:
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">22.1%</div>
                  <div className="text-gray-600">Peak Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">25</div>
                  <div className="text-gray-600">Year Warranty</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">6000+</div>
                  <div className="text-gray-600">Battery Cycles</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop"
                alt="Solar panel performance"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -right-4 bg-green-600 text-white p-4 rounded-lg shadow-lg">
                <TrendingUp className="h-6 w-6 mb-2" />
                <div className="text-sm font-semibold">Peak Performance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Certifications & Standards</h2>
            <p className="text-lg text-gray-300">
              Our products meet the highest industry standards for quality and safety.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg text-center">
                <Shield className="h-6 w-6 text-green-400 mx-auto mb-2" />
                <span className="font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Choose Your Solar Solution?</h2>
          <p className="text-xl text-green-100 mb-8">
            Our experts will help you select the perfect products for your energy needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300">
              Get Product Quote
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;