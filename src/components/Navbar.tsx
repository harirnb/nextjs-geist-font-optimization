'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isNepali, toggleLanguage } = useLanguage()

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-green-700 hover:text-green-800 transition-colors">
              {isNepali ? 'एग्रो नेपाल' : 'Agro Nepal'}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'गृह' : 'Home'}
              </Link>
              <Link 
                href="#weather" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'मौसम' : 'Weather'}
              </Link>
              <Link 
                href="#market" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'बजार' : 'Market'}
              </Link>
              <Link 
                href="#tips" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'सुझाव' : 'Tips'}
              </Link>
              <Link 
                href="#calendar" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'क्यालेन्डर' : 'Calendar'}
              </Link>
              <Link 
                href="#diseases" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'रोग' : 'Diseases'}
              </Link>
              <Link 
                href="#fertilizer" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'मल' : 'Fertilizer'}
              </Link>
              <Link 
                href="#schemes" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'योजना' : 'Schemes'}
              </Link>
              <Link 
                href="#loans" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'ऋण' : 'Loans'}
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-green-700 px-2 py-2 text-sm font-medium transition-colors"
              >
                {isNepali ? 'सम्पर्क' : 'Contact'}
              </Link>
            </div>
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-200 transition-colors"
            >
              {isNepali ? 'English' : 'नेपाली'}
            </button>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 p-2"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                  <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-50 rounded-lg mt-2">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'गृह' : 'Home'}
              </Link>
              <Link 
                href="#weather" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'मौसम' : 'Weather'}
              </Link>
              <Link 
                href="#market" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'बजार मूल्य' : 'Market Prices'}
              </Link>
              <Link 
                href="#tips" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'खेतीपातीका सुझावहरू' : 'Farming Tips'}
              </Link>
              <Link 
                href="#calendar" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'बाली क्यालेन्डर' : 'Crop Calendar'}
              </Link>
              <Link 
                href="#diseases" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'रोग पहिचानकर्ता' : 'Disease Identifier'}
              </Link>
              <Link 
                href="#fertilizer" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'मल गणना यन्त्र' : 'Fertilizer Calculator'}
              </Link>
              <Link 
                href="#schemes" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'सरकारी योजनाहरू' : 'Government Schemes'}
              </Link>
              <Link 
                href="#loans" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'ऋण र क्रेडिट' : 'Loan & Credit'}
              </Link>
              <Link 
                href="#contact" 
                className="text-gray-700 hover:text-green-700 block px-3 py-2 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {isNepali ? 'सम्पर्क' : 'Contact'}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
