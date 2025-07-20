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
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <button
                onClick={toggleLanguage}
                className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
              >
                {isNepali ? 'English' : 'नेपाली'}
              </button>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              {isNepali ? 'एग्रो नेपाल' : 'Agro Nepal'}
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-4">
              {isNepali ? 'हाम्रा किसानहरूलाई सशक्तिकरण' : 'Empowering Our Farmers'}
            </p>
            <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto">
              {isNepali 
                ? 'वास्तविक समयको मौसम अपडेट, हालको बजार मूल्य, र विशेषज्ञ खेतीपातीका सुझावहरू पाएर आफ्नो कृषि उत्पादकता बढाउनुहोस् र सूचित खेती निर्णयहरू गर्नुहोस्।'
                : 'Get real-time weather updates, current market prices, and expert farming tips to boost your agricultural productivity and make informed farming decisions.'
              }
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#weather" 
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                {isNepali ? 'मौसम हेर्नुहोस्' : 'Check Weather'}
              </a>
              <a 
                href="#market" 
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                {isNepali ? 'बजार मूल्य हेर्नुहोस्' : 'View Market Prices'}
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* Weather Section */}
      <section id="weather" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WeatherWidget />
        </div>
      </section>

      {/* Market Prices Section */}
      <section id="market" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketPrices />
        </div>
      </section>

      {/* Farming Tips Section */}
      <section id="tips" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FarmingTips />
        </div>
      </section>

      {/* Crop Calendar Section */}
      <section id="calendar" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CropCalendar />
        </div>
      </section>

      {/* Disease Identifier Section */}
      <section id="diseases" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <DiseaseIdentifier />
        </div>
      </section>

      {/* Fertilizer Calculator Section */}
      <section id="fertilizer" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FertilizerCalculator />
        </div>
      </section>

      {/* Government Schemes Section */}
      <section id="schemes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GovernmentSchemes />
        </div>
      </section>

      {/* Loan & Credit Section */}
      <section id="loans" className="py-16 bg-white">
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
