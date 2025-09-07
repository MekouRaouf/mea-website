import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
        const { t } = useTranslation();
  
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-green-600 p-2 rounded-lg">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">MEA SRLS</span>
            </div>
            <p className="text-gray-400 mb-4">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-green-400 transition-colors">{t('nav.home')}</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-green-400 transition-colors">{t('nav.about')}</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-green-400 transition-colors">{t('nav.products')}</Link></li>
              <li><Link to="/payasyougo" className="text-gray-400 hover:text-green-400 transition-colors">{t('nav.payasyougo')}</Link></li>
              <li><Link to="/team" className="text-gray-400 hover:text-green-400 transition-colors">{t('nav.team')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{t('footer.solarInstallation')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{t('footer.systemMonitoring')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{t('footer.maintenance')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">{t('footer.financingOptions')}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contactInfo')}</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">San Lorenzo 5, Genova (GE), Italia</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">+39 389 8493 690</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-400" />
                <span className="text-gray-400">making.energy@pec.it</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{t('footer.privacyPolicy')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{t('footer.termsOfService')}</a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors">{t('footer.cookiePolicy')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;