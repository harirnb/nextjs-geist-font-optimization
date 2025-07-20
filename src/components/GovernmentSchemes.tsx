'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface Scheme {
  id: number
  name: string
  nameNepali: string
  ministry: string
  ministryNepali: string
  description: string
  descriptionNepali: string
  eligibility: string[]
  eligibilityNepali: string[]
  benefits: string[]
  benefitsNepali: string[]
  applicationProcess: string[]
  applicationProcessNepali: string[]
  documents: string[]
  documentsNepali: string[]
  contactInfo: string
  contactInfoNepali: string
  status: 'Active' | 'Upcoming' | 'Closed'
  statusNepali: string
  category: string
  categoryNepali: string
}

export default function GovernmentSchemes() {
  const { isNepali } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const schemes: Scheme[] = [
    {
      id: 1,
      name: 'Prime Minister Agriculture Modernization Project (PMAMP)',
      nameNepali: 'प्रधानमन्त्री कृषि आधुनिकीकरण परियोजना',
      ministry: 'Ministry of Agriculture and Livestock Development',
      ministryNepali: 'कृषि तथा पशुपंक्षी विकास मन्त्रालय',
      description: 'Comprehensive program to modernize agriculture through technology, improved seeds, and market linkages.',
      descriptionNepali: 'प्रविधि, सुधारिएको बीउ र बजार जडानमार्फत कृषि आधुनिकीकरण गर्ने बृहत कार्यक्रम।',
      eligibility: [
        'Registered farmers with land ownership documents',
        'Farmer groups and cooperatives',
        'Agricultural entrepreneurs',
        'Youth interested in commercial farming'
      ],
      eligibilityNepali: [
        'जग्गाधनी प्रमाणपत्र भएका दर्ता भएका किसानहरू',
        'किसान समूह र सहकारीहरू',
        'कृषि उद्यमीहरू',
        'व्यावसायिक खेतीमा रुचि राख्ने युवाहरू'
      ],
      benefits: [
        'Up to 75% subsidy on agricultural equipment',
        'Free technical training and support',
        'Improved seed varieties at subsidized rates',
        'Market linkage support'
      ],
      benefitsNepali: [
        'कृषि उपकरणमा ७५% सम्म अनुदान',
        'निःशुल्क प्राविधिक तालिम र सहयोग',
        'अनुदानित दरमा सुधारिएको बीउ किस्म',
        'बजार जडान सहयोग'
      ],
      applicationProcess: [
        'Visit local agriculture office',
        'Submit application with required documents',
        'Attend orientation program',
        'Get approval and start implementation'
      ],
      applicationProcessNepali: [
        'स्थानीय कृषि कार्यालयमा जानुहोस्',
        'आवश्यक कागजातसहित निवेदन पेश गर्नुहोस्',
        'अभिमुखीकरण कार्यक्रममा सहभागी हुनुहोस्',
        'स्वीकृति पाएर कार्यान्वयन सुरु गर्नुहोस्'
      ],
      documents: [
        'Citizenship certificate',
        'Land ownership certificate',
        'Bank account details',
        'Passport size photos'
      ],
      documentsNepali: [
        'नागरिकता प्रमाणपत्र',
        'जग्गाधनी प्रमाणपत्र',
        'बैंक खाताको विवरण',
        'पासपोर्ट साइज फोटो'
      ],
      contactInfo: 'Call: 01-4211594 | Email: info@pmamp.gov.np',
      contactInfoNepali: 'फोन: ०१-४२११५९४ | इमेल: info@pmamp.gov.np',
      status: 'Active',
      statusNepali: 'सक्रिय',
      category: 'Modernization',
      categoryNepali: 'आधुनिकीकरण'
    },
    {
      id: 2,
      name: 'Youth Self-Employment Program',
      nameNepali: 'युवा स्वरोजगार कार्यक्रम',
      ministry: 'Ministry of Youth and Sports',
      ministryNepali: 'युवा तथा खेलकुद मन्त्रालय',
      description: 'Financial support and training for youth to start agriculture-based businesses.',
      descriptionNepali: 'युवाहरूलाई कृषिमा आधारित व्यवसाय सुरु गर्न आर्थिक सहयोग र तालिम।',
      eligibility: [
        'Age between 16-40 years',
        'Nepali citizenship',
        'Basic education (Class 8 minimum)',
        'No previous loan default'
      ],
      eligibilityNepali: [
        '१६-४० वर्ष उमेर',
        'नेपाली नागरिकता',
        'आधारभूत शिक्षा (न्यूनतम कक्षा ८)',
        'पहिले कुनै ऋण नतिरेको नहुनु'
      ],
      benefits: [
        'Loan up to NPR 2,00,000 at 1% interest',
        'Business development training',
        'Marketing support',
        '3-year repayment period'
      ],
      benefitsNepali: [
        '१% ब्याजमा २ लाख रुपैयाँ सम्म ऋण',
        'व्यवसाय विकास तालिम',
        'बजारीकरण सहयोग',
        '३ वर्षको फिर्ता अवधि'
      ],
      applicationProcess: [
        'Apply online at www.ysef.gov.np',
        'Submit business plan',
        'Attend interview',
        'Complete training program'
      ],
      applicationProcessNepali: [
        'www.ysef.gov.np मा अनलाइन आवेदन दिनुहोस्',
        'व्यवसायिक योजना पेश गर्नुहोस्',
        'अन्तर्वार्तामा सहभागी हुनुहोस्',
        'तालिम कार्यक्रम पूरा गर्नुहोस्'
      ],
      documents: [
        'Citizenship certificate',
        'Educational certificates',
        'Business plan',
        'Bank guarantee'
      ],
      documentsNepali: [
        'नागरिकता प्रमाणपत्र',
        'शैक्षिक प्रमाणपत्र',
        'व्यवसायिक योजना',
        'बैंक जमानत'
      ],
      contactInfo: 'Call: 01-4004000 | Email: info@ysef.gov.np',
      contactInfoNepali: 'फोन: ०१-४००४००० | इमेल: info@ysef.gov.np',
      status: 'Active',
      statusNepali: 'सक्रिय',
      category: 'Youth',
      categoryNepali: 'युवा'
    },
    {
      id: 3,
      name: 'Crop Insurance Program',
      nameNepali: 'बाली बीमा कार्यक्रम',
      ministry: 'Ministry of Agriculture and Livestock Development',
      ministryNepali: 'कृषि तथा पशुपंक्षी विकास मन्त्रालय',
      description: 'Insurance coverage for crops against natural disasters and weather-related losses.',
      descriptionNepali: 'प्राकृतिक प्रकोप र मौसमजन्य नोकसानविरुद्ध बालीको बीमा सुरक्षा।',
      eligibility: [
        'Farmers with minimum 0.5 hectare land',
        'Crops grown in designated areas',
        'Premium payment capability',
        'No history of insurance fraud'
      ],
      eligibilityNepali: [
        'न्यूनतम ०.५ हेक्टर जग्गा भएका किसान',
        'तोकिएको क्षेत्रमा उब्जाइएको बाली',
        'प्रिमियम तिर्न सक्ने क्षमता',
        'बीमा ठगीको इतिहास नभएको'
      ],
      benefits: [
        'Up to 80% crop loss coverage',
        'Government subsidy on premium',
        'Quick claim settlement',
        'Coverage for multiple crops'
      ],
      benefitsNepali: [
        '८०% सम्म बाली नोकसानको क्षतिपूर्ति',
        'प्रिमियममा सरकारी अनुदान',
        'छिटो दाबी भुक्तानी',
        'धेरै बालीको सुरक्षा'
      ],
      applicationProcess: [
        'Contact local insurance agent',
        'Fill application form',
        'Pay premium amount',
        'Get policy document'
      ],
      applicationProcessNepali: [
        'स्थानीय बीमा एजेन्टलाई सम्पर्क गर्नुहोस्',
        'आवेदन फारम भर्नुहोस्',
        'प्रिमियम रकम तिर्नुहोस्',
        'पोलिसी कागजात लिनुहोस्'
      ],
      documents: [
        'Land ownership certificate',
        'Citizenship certificate',
        'Crop details',
        'Bank account information'
      ],
      documentsNepali: [
        'जग्गाधनी प्रमाणपत्र',
        'नागरिकता प्रमाणपत्र',
        'बालीको विवरण',
        'बैंक खाताको जानकारी'
      ],
      contactInfo: 'Call: 01-4220590 | Email: info@cropinsurance.gov.np',
      contactInfoNepali: 'फोन: ०१-४२२०५९० | इमेल: info@cropinsurance.gov.np',
      status: 'Active',
      statusNepali: 'सक्रिय',
      category: 'Insurance',
      categoryNepali: 'बीमा'
    },
    {
      id: 4,
      name: 'Digital Agriculture Initiative',
      nameNepali: 'डिजिटल कृषि पहल',
      ministry: 'Ministry of Communication and Information Technology',
      ministryNepali: 'सञ्चार तथा सूचना प्रविधि मन्त्रालय',
      description: 'Promoting digital technology adoption in agriculture through mobile apps and online platforms.',
      descriptionNepali: 'मोबाइल एप र अनलाइन प्लेटफर्ममार्फत कृषिमा डिजिटल प्रविधिको प्रयोग बढाउने।',
      eligibility: [
        'Farmers with smartphone access',
        'Basic digital literacy',
        'Internet connectivity in area',
        'Willingness to learn new technology'
      ],
      eligibilityNepali: [
        'स्मार्टफोन पहुँच भएका किसान',
        'आधारभूत डिजिटल साक्षरता',
        'क्षेत्रमा इन्टरनेट जडान',
        'नयाँ प्रविधि सिक्न इच्छुक'
      ],
      benefits: [
        'Free mobile app with farming guidance',
        'Online market price updates',
        'Weather alerts and advisories',
        'Expert consultation via video call'
      ],
      benefitsNepali: [
        'खेतीपातीको मार्गदर्शन सहितको निःशुल्क मोबाइल एप',
        'अनलाइन बजार मूल्य अपडेट',
        'मौसम चेतावनी र सल्लाह',
        'भिडियो कलमार्फत विशेषज्ञ परामर्श'
      ],
      applicationProcess: [
        'Download official app from Play Store',
        'Register with phone number',
        'Complete profile setup',
        'Start using digital services'
      ],
      applicationProcessNepali: [
        'प्ले स्टोरबाट आधिकारिक एप डाउनलोड गर्नुहोस्',
        'फोन नम्बरले दर्ता गर्नुहोस्',
        'प्रोफाइल सेटअप पूरा गर्नुहोस्',
        'डिजिटल सेवा प्रयोग सुरु गर्नुहोस्'
      ],
      documents: [
        'Mobile phone number',
        'Basic farmer information',
        'Location details',
        'Crop preferences'
      ],
      documentsNepali: [
        'मोबाइल फोन नम्बर',
        'आधारभूत किसान जानकारी',
        'स्थानको विवरण',
        'बालीको प्राथमिकता'
      ],
      contactInfo: 'Call: 01-4200000 | Email: support@digitalagri.gov.np',
      contactInfoNepali: 'फोन: ०१-४२००००० | इमेल: support@digitalagri.gov.np',
      status: 'Active',
      statusNepali: 'सक्रिय',
      category: 'Technology',
      categoryNepali: 'प्रविधि'
    }
  ]

  const categories = [
    { en: 'All', np: 'सबै' },
    { en: 'Modernization', np: 'आधुनिकीकरण' },
    { en: 'Youth', np: 'युवा' },
    { en: 'Insurance', np: 'बीमा' },
    { en: 'Technology', np: 'प्रविधि' }
  ]

  const filteredSchemes = schemes.filter(scheme => {
    const categoryMatch = selectedCategory === 'All' || scheme.category === selectedCategory
    const searchMatch = searchTerm === '' || 
      scheme.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.nameNepali.includes(searchTerm)
    return categoryMatch && searchMatch
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Upcoming':
        return 'bg-blue-100 text-blue-800'
      case 'Closed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'सरकारी योजनाहरू र अनुदान' : 'Government Schemes & Subsidies'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder={isNepali ? 'योजना खोज्नुहोस्...' : 'Search schemes...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select 
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {categories.map(category => (
              <option key={category.en} value={category.en}>
                {isNepali ? category.np : category.en}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        {isNepali ? `${filteredSchemes.length} योजनाहरू उपलब्ध` : `${filteredSchemes.length} schemes available`}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredSchemes.map((scheme) => (
          <div key={scheme.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">
                  {isNepali ? scheme.nameNepali : scheme.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {isNepali ? scheme.ministryNepali : scheme.ministry}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${getStatusColor(scheme.status)}`}>
                {isNepali ? scheme.statusNepali : scheme.status}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {isNepali ? scheme.descriptionNepali : scheme.description}
            </p>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800 mb-1">
                  {isNepali ? 'मुख्य फाइदाहरू:' : 'Key Benefits:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? scheme.benefitsNepali : scheme.benefits).slice(0, 2).map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-1">
                  {isNepali ? 'योग्यता:' : 'Eligibility:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? scheme.eligibilityNepali : scheme.eligibility).slice(0, 2).map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-3 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-1">
                  {isNepali ? 'सम्पर्क:' : 'Contact:'}
                </p>
                <p className="text-xs text-gray-600">
                  {isNepali ? scheme.contactInfoNepali : scheme.contactInfo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSchemes.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {isNepali ? 'कुनै योजना फेला परेन।' : 'No schemes found.'}
          </p>
        </div>
      )}

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? '📢 महत्वपूर्ण सूचना' : '📢 Important Notice'}
        </h4>
        <p className="text-sm text-gray-600">
          {isNepali 
            ? 'यी योजनाहरू नियमित अपडेट हुन्छन्। नवीनतम जानकारीका लागि सम्बन्धित कार्यालयमा सम्पर्क गर्नुहोस्।'
            : 'These schemes are regularly updated. Contact respective offices for the latest information.'
          }
        </p>
      </div>
    </div>
  )
}
