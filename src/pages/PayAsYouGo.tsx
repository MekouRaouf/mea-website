import React from 'react';
import { DollarSign, Calendar, TrendingUp, Shield, Calculator, CheckCircle, ArrowRight } from 'lucide-react';

const PayAsYouGo = () => {
  const plans = [
    {
      name: 'Starter Plan',
      monthlyPayment: '$29',
      systemSize: '2-3 kW',
      features: ['No upfront costs', 'Professional installation included', 'Basic monitoring', 'Email support'],
      savings: 'Up to 30% on electricity bills',
      ideal: 'Small homes, 1-2 bedrooms'
    },
    {
      name: 'Family Plan',
      monthlyPayment: '$49',
      systemSize: '4-6 kW',
      features: ['No upfront costs', 'Professional installation included', 'Advanced monitoring', 'Priority support', 'Mobile app'],
      savings: 'Up to 50% on electricity bills',
      ideal: 'Medium homes, 3-4 bedrooms',
      popular: true
    },
    {
      name: 'Premium Plan',
      monthlyPayment: '$79',
      systemSize: '7-10 kW',
      features: ['No upfront costs', 'Professional installation included', 'Premium monitoring', '24/7 support', 'Mobile app', 'Battery backup option'],
      savings: 'Up to 70% on electricity bills',
      ideal: 'Large homes, 5+ bedrooms'
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="h-8 w-8" />,
      title: 'Zero Upfront Costs',
      description: 'Get solar installed with no down payment, no loans, and no credit checks required.'
    },
    {
      icon: <Calendar className="h-8 w-8" />,
      title: 'Flexible Terms',
      description: 'Choose from 10, 15, or 20-year plans with the option to purchase your system anytime.'
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: 'Immediate Savings',
      description: 'Start saving on your electricity bills from day one with lower monthly solar payments.'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Complete Protection',
      description: 'Full maintenance, repairs, and insurance included. We handle everything for you.'
    }
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Free Assessment',
      description: 'Our experts evaluate your home and energy needs to design the perfect solar system.'
    },
    {
      step: '2',
      title: 'Custom Proposal',
      description: 'Receive a personalized PayAsYouGo plan with guaranteed savings projections.'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Certified installers set up your system with minimal disruption to your routine.'
    },
    {
      step: '4',
      title: 'Start Saving',
      description: 'Begin enjoying clean energy and lower electricity bills immediately after activation.'
    }
  ];

  const faqs = [
    {
      question: 'What happens if I want to sell my home?',
      answer: 'The PayAsYouGo agreement can be transferred to the new homeowner, or you can purchase the system at fair market value.'
    },
    {
      question: 'Who maintains the solar system?',
      answer: 'We handle all maintenance, repairs, and monitoring. If anything goes wrong, we fix it at no cost to you.'
    },
    {
      question: 'Can I buy the system early?',
      answer: 'Yes! You can purchase your system anytime during the contract at a pre-determined fair market price.'
    },
    {
      question: 'What if the panels don\'t produce enough energy?',
      answer: 'We guarantee your system performance. If it underperforms, we\'ll adjust your payment or fix the issue.'
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
                Solar Made 
                <span className="text-green-600"> Simple</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Go solar with $0 down and start saving immediately. Our PayAsYouGo model makes 
                clean energy affordable for everyone, with no upfront costs and guaranteed savings.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center">
                  Calculate My Savings
                  <Calculator className="ml-2 h-5 w-5" />
                </button>
                <button className="bg-transparent border-2 border-green-600 text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-600 hover:text-white transition-colors">
                  Learn How It Works
                </button>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=700&h=500&fit=crop"
                alt="Solar home"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold text-green-600">$0</div>
                <div className="text-sm text-gray-600">Upfront Cost</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose PayAsYouGo?</h2>
            <p className="text-lg text-gray-600">
              Experience the freedom of solar energy without the financial burden.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="text-green-600">{benefit.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
            <p className="text-lg text-gray-600">
              Flexible options designed to fit your home size and energy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-lg shadow-lg overflow-hidden ${plan.popular ? 'ring-2 ring-green-600 transform scale-105' : ''}`}>
                {plan.popular && (
                  <div className="bg-green-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-green-600 mb-1">{plan.monthlyPayment}</div>
                  <div className="text-gray-600 mb-4">per month</div>
                  
                  <div className="mb-6">
                    <div className="text-lg font-semibold text-gray-900 mb-2">System Size: {plan.systemSize}</div>
                    <div className="text-green-600 font-medium mb-4">{plan.savings}</div>
                    <div className="text-sm text-gray-600 mb-4">Ideal for: {plan.ideal}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${plan.popular ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How PayAsYouGo Works</h2>
            <p className="text-lg text-gray-600">
              Simple steps to start your solar journey with zero upfront investment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-green-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
                {index < howItWorks.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full transform translate-x-4">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings Calculator */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Calculate Your Savings</h2>
          <p className="text-xl text-green-100 mb-8">
            See how much you could save with our PayAsYouGo solar solution.
          </p>
          
          <div className="bg-white rounded-lg p-8 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$0</div>
                <div className="text-gray-600">Down Payment</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">30-70%</div>
                <div className="text-gray-600">Bill Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">25 Years</div>
                <div className="text-gray-600">Warranty</div>
              </div>
            </div>
          </div>
          
          <button className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center mx-auto">
            Get My Custom Quote
            <Calculator className="ml-2 h-5 w-5" />
          </button>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our PayAsYouGo solar program.
            </p>
          </div>
          
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Go Solar?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of homeowners who have switched to clean, affordable solar energy 
            with our PayAsYouGo program.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors">
              Start Your Solar Journey
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PayAsYouGo;