'use client'

import WeatherWidget from '@/components/WeatherWidget'
import MarketPrices from '@/components/MarketPrices'
import FarmingTips from '@/components/FarmingTips'
import CropCalendar from '@/components/CropCalendar'
import DiseaseIdentifier from '@/components/DiseaseIdentifier'
import FertilizerCalculator from '@/components/FertilizerCalculator'
import GovernmentSchemes from '@/components/GovernmentSchemes'
import LoanCredit from '@/components/LoanCredit'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Home() {
  const { isNepali, toggleLanguage } = useLanguage()
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-emerald-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              🌾 {isNepali ? 'नेपालको नम्बर १ कृषि प्लेटफर्म' : 'Nepal\'s #1 Agriculture Platform'}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              {isNepali ? 'एग्रो नेपाल' : 'Agro Nepal'}
            </h1>
            <p className="text-2xl md:text-3xl text-green-700 font-semibold mb-6">
              {isNepali ? 'हाम्रा किसानहरूलाई सशक्तिकरण' : 'Empowering Our Farmers'}
            </p>
            <p className="text-lg text-gray-600 mb-10 max-w-4xl mx-auto leading-relaxed">
              {isNepali 
                ? 'वास्तविक समयको मौसम अपडेट, हालको बजार मूल्य, र विशेषज्ञ खेतीपातीका सुझावहरू पाएर आफ्नो कृषि उत्पादकता बढाउनुहोस् र सूचित खेती निर्णयहरू गर्नुहोस्।'
                : 'Get real-time weather updates, current market prices, and expert farming tips to boost your agricultural productivity and make informed farming decisions.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a 
                href="#weather" 
                className="bg-green-600 text-white px-10 py-4 rounded-xl font-semibold text-lg hover:bg-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isNepali ? '🌤️ मौसम हेर्नुहोस्' : '🌤️ Check Weather'}
              </a>
              <a 
                href="#market" 
                className="bg-white text-green-600 px-10 py-4 rounded-xl font-semibold text-lg border-2 border-green-600 hover:bg-green-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {isNepali ? '📈 बजार मूल्य हेर्नुहोस्' : '📈 View Market Prices'}
              </a>
            </div>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-green-600 mb-2">10,000+</div>
                <div className="text-gray-600">{isNepali ? 'सक्रिय किसानहरू' : 'Active Farmers'}</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-2">75+</div>
                <div className="text-gray-600">{isNepali ? 'जिल्लाहरूमा सेवा' : 'Districts Served'}</div>
              </div>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                <div className="text-gray-600">{isNepali ? 'सहयोग उपलब्ध' : 'Support Available'}</div>
              </div>
            </div>
          </div>
        </div>
      {/* Features Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {isNepali ? 'हाम्रा सेवाहरू' : 'Our Services'}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {isNepali 
                ? 'आधुनिक प्रविधि र विशेषज्ञ सल्लाहको साथ आफ्नो खेतीपातीलाई अगाडि बढाउनुहोस्'
                : 'Advance your farming with modern technology and expert advice'
              }
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-2xl">🌤️</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{isNepali ? 'मौसम अपडेट' : 'Weather Updates'}</h3>
              <p className="text-gray-600 text-sm">{isNepali ? 'वास्तविक समयको मौसम जानकारी' : 'Real-time weather information'}</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{isNepali ? 'बजार मूल्य' : 'Market Prices'}</h3>
              <p className="text-gray-600 text-sm">{isNepali ? 'हालको बजार दरहरू' : 'Current market rates'}</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{isNepali ? 'खेती सुझाव' : 'Farming Tips'}</h3>
              <p className="text-gray-600 text-sm">{isNepali ? 'विशेषज्ञ सल्लाह र सुझावहरू' : 'Expert advice and tips'}</p>
            </div>
            
            <div className="text-center group">
              <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                <span className="text-2xl">🤖</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">{isNepali ? 'AI सल्लाहकार' : 'AI Advisor'}</h3>
              <p className="text-gray-600 text-sm">{isNepali ? 'व्यक्तिगत कृषि सल्लाह' : 'Personalized farming advice'}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weather Section */}
      <section id="weather" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeatherWidget />
        </div>
      </section>

      {/* Market Prices Section */}
      <section id="market" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketPrices />
        </div>
      </section>

      {/* Farming Tips Section */}
      <section id="tips" className="py-20 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FarmingTips />
        </div>
      </section>

      {/* Crop Calendar Section */}
      <section id="calendar" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CropCalendar />
        </div>
      </section>

      {/* Disease Identifier Section */}
      <section id="diseases" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiseaseIdentifier />
        </div>
      </section>

      {/* Fertilizer Calculator Section */}
      <section id="fertilizer" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FertilizerCalculator />
        </div>
      </section>

      {/* Government Schemes Section */}
      <section id="schemes" className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GovernmentSchemes />
        </div>
      </section>

      {/* Loan & Credit Section */}
      <section id="loans" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <LoanCredit />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {isNepali ? 'सहयोग चाहिन्छ?' : 'Need Help?'}
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            {isNepali 
              ? 'हाम्रो टोली खेतीपातीका प्रविधिहरू, बजार प्रवृत्तिहरू, वा हाम्रो प्लेटफर्म प्रयोग गर्ने बारेमा तपाईंका कुनै पनि प्रश्नहरूमा सहयोग गर्न यहाँ छ।'
              : 'Our team is here to support you with any questions about farming techniques, market trends, or using our platform.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:ranabhathari0@gmail.com" 
              className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              {isNepali ? 'इमेल गर्नुहोस्' : 'Email Us'}
            </a>
            <a 
              href="tel:+977-9827592407" 
              className="bg-green-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors"
            >
              {isNepali ? 'फोन गर्नुहोस्' : 'Call Us'}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
