'use client'

import { useState } from 'react'

interface FertilizerRecommendation {
  nitrogen: number
  phosphorus: number
  potassium: number
  organic: string
  organicNepali: string
  timing: string[]
  timingNepali: string[]
  notes: string
  notesNepali: string
}

export default function FertilizerCalculator() {
  const [isNepali, setIsNepali] = useState(false)
  const [crop, setCrop] = useState('')
  const [area, setArea] = useState('')
  const [soilType, setSoilType] = useState('')
  const [recommendation, setRecommendation] = useState<FertilizerRecommendation | null>(null)

  const crops = [
    { en: 'Rice', np: 'धान' },
    { en: 'Wheat', np: 'गहुँ' },
    { en: 'Maize', np: 'मकै' },
    { en: 'Potato', np: 'आलु' },
    { en: 'Tomato', np: 'गोलभेडा' },
    { en: 'Cabbage', np: 'बन्दागोभी' },
    { en: 'Onion', np: 'प्याज' }
  ]

  const soilTypes = [
    { en: 'Sandy', np: 'बालुवा माटो' },
    { en: 'Clay', np: 'माटो' },
    { en: 'Loamy', np: 'दोमट माटो' },
    { en: 'Sandy Loam', np: 'बालुवा दोमट' }
  ]

  const fertilizerData: { [key: string]: FertilizerRecommendation } = {
    'Rice': {
      nitrogen: 120,
      phosphorus: 60,
      potassium: 40,
      organic: 'Apply 5-10 tons of farmyard manure per hectare',
      organicNepali: 'प्रति हेक्टर ५-१० टन गोबर मल प्रयोग गर्नुहोस्',
      timing: ['Basal: 50% N, 100% P, 100% K', 'Tillering: 25% N', 'Panicle: 25% N'],
      timingNepali: ['आधार: ५०% N, १००% P, १००% K', 'कुशे फुट्दा: २५% N', 'बाला निस्कदा: २५% N'],
      notes: 'Split nitrogen application for better efficiency',
      notesNepali: 'राम्रो दक्षताका लागि नाइट्रोजन भागमा बाँडेर प्रयोग गर्नुहोस्'
    },
    'Wheat': {
      nitrogen: 100,
      phosphorus: 50,
      potassium: 30,
      organic: 'Apply 8-12 tons of compost per hectare',
      organicNepali: 'प्रति हेक्टर ८-१२ टन कम्पोस्ट प्रयोग गर्नुहोस्',
      timing: ['Basal: 50% N, 100% P, 100% K', 'Crown root: 25% N', 'Jointing: 25% N'],
      timingNepali: ['आधार: ५०% N, १००% P, १००% K', 'जरा निस्कदा: २५% N', 'गाँठो बाँध्दा: २५% N'],
      notes: 'Apply phosphorus at sowing for root development',
      notesNepali: 'जरा विकासका लागि छर्दा फस्फोरस प्रयोग गर्नुहोस्'
    },
    'Maize': {
      nitrogen: 150,
      phosphorus: 75,
      potassium: 50,
      organic: 'Apply 10-15 tons of farmyard manure per hectare',
      organicNepali: 'प्रति हेक्टर १०-१५ टन गोबर मल प्रयोग गर्नुहोस्',
      timing: ['Basal: 40% N, 100% P, 100% K', 'Knee high: 30% N', 'Tasseling: 30% N'],
      timingNepali: ['आधार: ४०% N, १००% P, १००% K', 'घुँडा उचाइ: ३०% N', 'फूल फुल्दा: ३०% N'],
      notes: 'High nitrogen requirement, apply in splits',
      notesNepali: 'उच्च नाइट्रोजन चाहिन्छ, भागमा बाँडेर प्रयोग गर्नुहोस्'
    },
    'Potato': {
      nitrogen: 180,
      phosphorus: 80,
      potassium: 150,
      organic: 'Apply 20-25 tons of well-rotted manure per hectare',
      organicNepali: 'प्रति हेक्टर २०-२५ टन राम्ररी कुहिएको मल प्रयोग गर्नुहोस्',
      timing: ['Basal: 50% N, 100% P, 50% K', 'Earthing up: 50% N, 50% K'],
      timingNepali: ['आधार: ५०% N, १००% P, ५०% K', 'माटो थुप्दा: ५०% N, ५०% K'],
      notes: 'High potassium requirement for tuber development',
      notesNepali: 'कन्द विकासका लागि उच्च पोटासियम चाहिन्छ'
    },
    'Tomato': {
      nitrogen: 200,
      phosphorus: 100,
      potassium: 150,
      organic: 'Apply 15-20 tons of compost per hectare',
      organicNepali: 'प्रति हेक्टर १५-२० टन कम्पोस्ट प्रयोग गर्नुहोस्',
      timing: ['Basal: 40% N, 100% P, 40% K', 'Flowering: 30% N, 30% K', 'Fruiting: 30% N, 30% K'],
      timingNepali: ['आधार: ४०% N, १००% P, ४०% K', 'फूल फुल्दा: ३०% N, ३०% K', 'फल लाग्दा: ३०% N, ३०% K'],
      notes: 'Regular feeding required throughout growing season',
      notesNepali: 'बढ्दो मौसमभर नियमित खुवाउनु आवश्यक'
    },
    'Cabbage': {
      nitrogen: 150,
      phosphorus: 75,
      potassium: 100,
      organic: 'Apply 12-15 tons of farmyard manure per hectare',
      organicNepali: 'प्रति हेक्टर १२-१५ टन गोबर मल प्रयोग गर्नुहोस्',
      timing: ['Basal: 50% N, 100% P, 50% K', 'Head formation: 50% N, 50% K'],
      timingNepali: ['आधार: ५०% N, १००% P, ५०% K', 'टाउको बन्दा: ५०% N, ५०% K'],
      notes: 'Ensure adequate nitrogen for leaf development',
      notesNepali: 'पात विकासका लागि पर्याप्त नाइट्रोजन सुनिश्चित गर्नुहोस्'
    },
    'Onion': {
      nitrogen: 100,
      phosphorus: 50,
      potassium: 100,
      organic: 'Apply 10-12 tons of well-decomposed manure per hectare',
      organicNepali: 'प्रति हेक्टर १०-१२ टन राम्ररी कुहिएको मल प्रयोग गर्नुहोस्',
      timing: ['Basal: 50% N, 100% P, 50% K', 'Bulb formation: 50% N, 50% K'],
      timingNepali: ['आधार: ५०% N, १००% P, ५०% K', 'कन्द बन्दा: ५०% N, ५०% K'],
      notes: 'Avoid excess nitrogen during bulb maturation',
      notesNepali: 'कन्द पाक्दा अत्यधिक नाइट्रोजनबाट बच्नुहोस्'
    }
  }

  const calculateFertilizer = () => {
    if (!crop || !area) return

    const areaNum = parseFloat(area)
    const baseRecommendation = fertilizerData[crop]
    
    if (!baseRecommendation) return

    // Calculate per hectare, then adjust for actual area
    const areaFactor = areaNum / 10000 // Convert square meters to hectares
    
    const calculated: FertilizerRecommendation = {
      nitrogen: Math.round(baseRecommendation.nitrogen * areaFactor),
      phosphorus: Math.round(baseRecommendation.phosphorus * areaFactor),
      potassium: Math.round(baseRecommendation.potassium * areaFactor),
      organic: baseRecommendation.organic,
      organicNepali: baseRecommendation.organicNepali,
      timing: baseRecommendation.timing,
      timingNepali: baseRecommendation.timingNepali,
      notes: baseRecommendation.notes,
      notesNepali: baseRecommendation.notesNepali
    }

    setRecommendation(calculated)
  }

  const reset = () => {
    setCrop('')
    setArea('')
    setSoilType('')
    setRecommendation(null)
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'मल गणना यन्त्र' : 'Fertilizer Calculator'}
        </h2>
        <button
          onClick={() => setIsNepali(!isNepali)}
          className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
        >
          {isNepali ? 'English' : 'नेपाली'}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Input Form */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isNepali ? 'बाली छान्नुहोस्:' : 'Select Crop:'}
            </label>
            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">{isNepali ? 'बाली छान्नुहोस्' : 'Choose a crop'}</option>
              {crops.map((cropOption) => (
                <option key={cropOption.en} value={cropOption.en}>
                  {isNepali ? cropOption.np : cropOption.en}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isNepali ? 'क्षेत्रफल (वर्ग मिटर):' : 'Area (Square Meters):'}
            </label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder={isNepali ? 'जस्तै: 1000' : 'e.g., 1000'}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              {isNepali ? '१ हेक्टर = १०,००० वर्ग मिटर' : '1 hectare = 10,000 square meters'}
            </p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {isNepali ? 'माटोको प्रकार:' : 'Soil Type:'}
            </label>
            <select
              value={soilType}
              onChange={(e) => setSoilType(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              <option value="">{isNepali ? 'माटोको प्रकार छान्नुहोस्' : 'Choose soil type'}</option>
              {soilTypes.map((soil) => (
                <option key={soil.en} value={soil.en}>
                  {isNepali ? soil.np : soil.en}
                </option>
              ))}
            </select>
          </div>

          <div className="flex gap-4">
            <button
              onClick={calculateFertilizer}
              disabled={!crop || !area}
              className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
            >
              {isNepali ? 'गणना गर्नुहोस्' : 'Calculate'}
            </button>
            <button
              onClick={reset}
              className="flex-1 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors"
            >
              {isNepali ? 'रिसेट' : 'Reset'}
            </button>
          </div>
        </div>

        {/* Results */}
        <div>
          {recommendation ? (
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-gray-900">
                {isNepali ? 'मल सिफारिस' : 'Fertilizer Recommendation'}
              </h3>
              
              {/* NPK Requirements */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-3">
                  {isNepali ? 'रासायनिक मल (किलोग्राम):' : 'Chemical Fertilizers (kg):'}
                </h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{recommendation.nitrogen}</div>
                    <div className="text-sm text-gray-600">
                      {isNepali ? 'नाइट्रोजन (N)' : 'Nitrogen (N)'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-red-600">{recommendation.phosphorus}</div>
                    <div className="text-sm text-gray-600">
                      {isNepali ? 'फस्फोरस (P)' : 'Phosphorus (P)'}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">{recommendation.potassium}</div>
                    <div className="text-sm text-gray-600">
                      {isNepali ? 'पोटासियम (K)' : 'Potassium (K)'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Organic Fertilizer */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'जैविक मल:' : 'Organic Fertilizer:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {isNepali ? recommendation.organicNepali : recommendation.organic}
                </p>
              </div>

              {/* Application Timing */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'प्रयोगको समय:' : 'Application Timing:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? recommendation.timingNepali : recommendation.timing).map((time, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {time}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notes */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'महत्वपूर्ण नोट:' : 'Important Notes:'}
                </h4>
                <p className="text-sm text-gray-600">
                  {isNepali ? recommendation.notesNepali : recommendation.notes}
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🧮</div>
                <p className="text-gray-500">
                  {isNepali 
                    ? 'बाली र क्षेत्रफल छानेर मल गणना गर्नुहोस्'
                    : 'Select crop and area to calculate fertilizer requirements'
                  }
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 p-4 bg-orange-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? '⚠️ सुझाव' : '⚠️ Disclaimer'}
        </h4>
        <p className="text-sm text-gray-600">
          {isNepali 
            ? 'यो सामान्य सिफारिस हो। माटो परीक्षण गरेर र स्थानीय कृषि विशेषज्ञसँग सल्लाह गरेर मल प्रयोग गर्नुहोस्।'
            : 'These are general recommendations. Always conduct soil testing and consult local agricultural experts before applying fertilizers.'
          }
        </p>
      </div>
    </div>
  )
}
