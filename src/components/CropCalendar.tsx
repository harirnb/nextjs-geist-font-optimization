'use client'

import { useState } from 'react'

interface CropInfo {
  id: number
  name: string
  nameNepali: string
  plantingMonths: string[]
  plantingMonthsNepali: string[]
  harvestMonths: string[]
  harvestMonthsNepali: string[]
  duration: string
  durationNepali: string
  season: string
  seasonNepali: string
  tips: string
  tipsNepali: string
}

export default function CropCalendar() {
  const [isNepali, setIsNepali] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState<string>('All')

  const crops: CropInfo[] = [
    {
      id: 1,
      name: 'Rice',
      nameNepali: 'धान',
      plantingMonths: ['June', 'July'],
      plantingMonthsNepali: ['जेठ', 'असार'],
      harvestMonths: ['October', 'November'],
      harvestMonthsNepali: ['कार्तिक', 'मंसिर'],
      duration: '4-5 months',
      durationNepali: '४-५ महिना',
      season: 'Monsoon',
      seasonNepali: 'मनसुन',
      tips: 'Plant after first monsoon rain. Ensure proper water management.',
      tipsNepali: 'पहिलो मनसुनी वर्षा पछि रोप्नुहोस्। उचित पानी व्यवस्थापन सुनिश्चित गर्नुहोस्।'
    },
    {
      id: 2,
      name: 'Wheat',
      nameNepali: 'गहुँ',
      plantingMonths: ['November', 'December'],
      plantingMonthsNepali: ['मंसिर', 'पुष'],
      harvestMonths: ['April', 'May'],
      harvestMonthsNepali: ['बैशाख', 'जेठ'],
      duration: '5-6 months',
      durationNepali: '५-६ महिना',
      season: 'Winter',
      seasonNepali: 'जाडो',
      tips: 'Sow after rice harvest. Requires cool weather for growth.',
      tipsNepali: 'धान काटे पछि छर्नुहोस्। बृद्धिका लागि चिसो मौसम चाहिन्छ।'
    },
    {
      id: 3,
      name: 'Maize',
      nameNepali: 'मकै',
      plantingMonths: ['March', 'April', 'July'],
      plantingMonthsNepali: ['चैत', 'बैशाख', 'साउन'],
      harvestMonths: ['June', 'July', 'October'],
      harvestMonthsNepali: ['जेठ', 'असार', 'कार्तिक'],
      duration: '3-4 months',
      durationNepali: '३-४ महिना',
      season: 'Spring/Summer',
      seasonNepali: 'वसन्त/गर्मी',
      tips: 'Can be grown twice a year. Ensure good drainage.',
      tipsNepali: 'वर्षमा दुई पटक उब्जाउन सकिन्छ। राम्रो निकास सुनिश्चित गर्नुहोस्।'
    },
    {
      id: 4,
      name: 'Potato',
      nameNepali: 'आलु',
      plantingMonths: ['October', 'November'],
      plantingMonthsNepali: ['कार्तिक', 'मंसिर'],
      harvestMonths: ['February', 'March'],
      harvestMonthsNepali: ['माघ', 'फागुन'],
      duration: '3-4 months',
      durationNepali: '३-४ महिना',
      season: 'Winter',
      seasonNepali: 'जाडो',
      tips: 'Plant quality seed potatoes. Hill up soil around plants.',
      tipsNepali: 'गुणस्तरीय बीउ आलु रोप्नुहोस्। बिरुवा वरिपरि माटो थुप्नुहोस्।'
    },
    {
      id: 5,
      name: 'Tomato',
      nameNepali: 'गोलभेडा',
      plantingMonths: ['September', 'October', 'February'],
      plantingMonthsNepali: ['भदौ', 'कार्तिक', 'माघ'],
      harvestMonths: ['December', 'January', 'May'],
      harvestMonthsNepali: ['मंसिर', 'पुष', 'जेठ'],
      duration: '3-4 months',
      durationNepali: '३-४ महिना',
      season: 'Winter/Spring',
      seasonNepali: 'जाडो/वसन्त',
      tips: 'Provide support stakes. Regular watering needed.',
      tipsNepali: 'सहारा दिने खम्बा राख्नुहोस्। नियमित पानी चाहिन्छ।'
    },
    {
      id: 6,
      name: 'Cabbage',
      nameNepali: 'बन्दागोभी',
      plantingMonths: ['August', 'September'],
      plantingMonthsNepali: ['भदौ', 'असोज'],
      harvestMonths: ['November', 'December'],
      harvestMonthsNepali: ['मंसिर', 'पुष'],
      duration: '2-3 months',
      durationNepali: '२-३ महिना',
      season: 'Winter',
      seasonNepali: 'जाडो',
      tips: 'Transplant seedlings after 4-5 weeks. Keep soil moist.',
      tipsNepali: '४-५ हप्ता पछि बिरुवा सार्नुहोस्। माटो ओसिलो राख्नुहोस्।'
    }
  ]

  const months = [
    { en: 'January', np: 'पुष' }, { en: 'February', np: 'माघ' }, { en: 'March', np: 'फागुन' },
    { en: 'April', np: 'चैत' }, { en: 'May', np: 'बैशाख' }, { en: 'June', np: 'जेठ' },
    { en: 'July', np: 'असार' }, { en: 'August', np: 'साउन' }, { en: 'September', np: 'भदौ' },
    { en: 'October', np: 'असोज' }, { en: 'November', np: 'कार्तिक' }, { en: 'December', np: 'मंसिर' }
  ]

  const filteredCrops = selectedCrop === 'All' ? crops : crops.filter(crop => crop.name === selectedCrop)

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'बाली क्यालेन्डर' : 'Crop Calendar'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <select 
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="All">{isNepali ? 'सबै बाली' : 'All Crops'}</option>
            {crops.map(crop => (
              <option key={crop.id} value={crop.name}>
                {isNepali ? crop.nameNepali : crop.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsNepali(!isNepali)}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
          >
            {isNepali ? 'English' : 'नेपाली'}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900">
                {isNepali ? crop.nameNepali : crop.name}
              </h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                {isNepali ? crop.seasonNepali : crop.season}
              </span>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  {isNepali ? 'रोपाइ:' : 'Planting:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {(isNepali ? crop.plantingMonthsNepali : crop.plantingMonths).join(', ')}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  {isNepali ? 'फसल:' : 'Harvest:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {(isNepali ? crop.harvestMonthsNepali : crop.harvestMonths).join(', ')}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  {isNepali ? 'अवधि:' : 'Duration:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {isNepali ? crop.durationNepali : crop.duration}
                </p>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-700 mb-1">
                  {isNepali ? 'सुझाव:' : 'Tips:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {isNepali ? crop.tipsNepali : crop.tips}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? 'महत्वपूर्ण नोट' : 'Important Note'}
        </h4>
        <p className="text-sm text-gray-600">
          {isNepali 
            ? 'यो क्यालेन्डर सामान्य गाइडलाइन हो। स्थानीय मौसम र माटोको अवस्था अनुसार समायोजन गर्नुहोस्।'
            : 'This calendar is a general guideline. Adjust according to local weather and soil conditions.'
          }
        </p>
      </div>
    </div>
  )
}
