'use client'

import { useState, useEffect } from 'react'

interface WeatherData {
  location: string
  locationNepali: string
  temperature: number
  condition: string
  conditionNepali: string
  humidity: number
  windSpeed: number
  description: string
  descriptionNepali: string
}

const nepalDistricts = [
  { name: 'Kathmandu', nepali: 'काठमाडौं' },
  { name: 'Pokhara', nepali: 'पोखरा' },
  { name: 'Chitwan', nepali: 'चितवन' },
  { name: 'Dharan', nepali: 'धरान' },
  { name: 'Butwal', nepali: 'बुटवल' },
  { name: 'Biratnagar', nepali: 'विराटनगर' },
  { name: 'Birgunj', nepali: 'वीरगञ्ज' },
  { name: 'Janakpur', nepali: 'जनकपुर' },
  { name: 'Nepalgunj', nepali: 'नेपालगञ्ज' },
  { name: 'Hetauda', nepali: 'हेटौडा' },
  { name: 'Dhangadhi', nepali: 'धनगढी' },
  { name: 'Itahari', nepali: 'इटहरी' },
  { name: 'Gorkha', nepali: 'गोरखा' },
  { name: 'Palpa', nepali: 'पाल्पा' },
  { name: 'Baglung', nepali: 'बागलुङ' },
  { name: 'Syangja', nepali: 'स्याङ्जा' },
  { name: 'Lamjung', nepali: 'लमजुङ' },
  { name: 'Manang', nepali: 'मनाङ' },
  { name: 'Mustang', nepali: 'मुस्ताङ' },
  { name: 'Myagdi', nepali: 'म्याग्दी' },
  { name: 'Parbat', nepali: 'पर्वत' },
  { name: 'Nawalpur', nepali: 'नवलपुर' },
  { name: 'Rupandehi', nepali: 'रुपन्देही' },
  { name: 'Kapilvastu', nepali: 'कपिलवस्तु' },
  { name: 'Arghakhanchi', nepali: 'अर्घाखाँची' },
  { name: 'Gulmi', nepali: 'गुल्मी' },
  { name: 'Dang', nepali: 'दाङ' },
  { name: 'Banke', nepali: 'बाँके' },
  { name: 'Bardiya', nepali: 'बर्दिया' },
  { name: 'Surkhet', nepali: 'सुर्खेत' },
  { name: 'Dailekh', nepali: 'दैलेख' },
  { name: 'Jajarkot', nepali: 'जाजरकोट' },
  { name: 'Dolpa', nepali: 'डोल्पा' },
  { name: 'Jumla', nepali: 'जुम्ला' },
  { name: 'Kalikot', nepali: 'कालिकोट' },
  { name: 'Mugu', nepali: 'मुगु' },
  { name: 'Humla', nepali: 'हुम्ला' },
  { name: 'Bajura', nepali: 'बाजुरा' },
  { name: 'Bajhang', nepali: 'बझाङ' },
  { name: 'Achham', nepali: 'अछाम' },
  { name: 'Doti', nepali: 'डोटी' },
  { name: 'Kailali', nepali: 'कैलाली' },
  { name: 'Kanchanpur', nepali: 'कञ्चनपुर' },
  { name: 'Dadeldhura', nepali: 'डडेल्धुरा' },
  { name: 'Baitadi', nepali: 'बैतडी' },
  { name: 'Darchula', nepali: 'दार्चुला' }
]

export default function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedDistrict, setSelectedDistrict] = useState('Kathmandu')
  const [isNepali, setIsNepali] = useState(false)

  useEffect(() => {
    fetchWeather()
  }, [selectedDistrict])

  const fetchWeather = async () => {
    try {
      setLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Find selected district
      const district = nepalDistricts.find(d => d.name === selectedDistrict) || nepalDistricts[0]
      
      // Simulate weather data
      const conditions = [
        { en: 'Sunny', np: 'घामिलो' },
        { en: 'Partly Cloudy', np: 'आंशिक बादल' },
        { en: 'Cloudy', np: 'बादल' },
        { en: 'Light Rain', np: 'हल्का वर्षा' },
        { en: 'Clear', np: 'सफा' },
        { en: 'Overcast', np: 'बादलले ढाकिएको' }
      ]
      
      const descriptions = [
        { en: 'Perfect weather for farming activities', np: 'खेतीपाती गतिविधिका लागि उत्तम मौसम' },
        { en: 'Good conditions for outdoor work', np: 'बाहिरी कामका लागि राम्रो अवस्था' },
        { en: 'Suitable for planting and harvesting', np: 'रोप्न र काट्नका लागि उपयुक्त' },
        { en: 'Light rain expected, good for crops', np: 'हल्का वर्षाको सम्भावना, बालीका लागि राम्रो' },
        { en: 'Clear skies, ideal for field work', np: 'सफा आकाश, खेतको कामका लागि आदर्श' },
        { en: 'Moderate conditions for farming', np: 'खेतीका लागि मध्यम अवस्था' }
      ]

      const randomCondition = conditions[Math.floor(Math.random() * conditions.length)]
      const randomDescription = descriptions[Math.floor(Math.random() * descriptions.length)]

      const mockWeather: WeatherData = {
        location: district.name,
        locationNepali: district.nepali,
        temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
        condition: randomCondition.en,
        conditionNepali: randomCondition.np,
        humidity: Math.floor(Math.random() * 30) + 50, // 50-80%
        windSpeed: Math.floor(Math.random() * 10) + 5, // 5-15 km/h
        description: randomDescription.en,
        descriptionNepali: randomDescription.np
      }

      setWeather(mockWeather)
      setError(null)
    } catch (err) {
      setError(isNepali ? 'मौसम डेटा प्राप्त गर्न सकिएन। कृपया फेरि प्रयास गर्नुहोस्।' : 'Unable to fetch weather data. Please try again later.')
      setWeather(null)
    } finally {
      setLoading(false)
    }
  }

  const refreshWeather = () => {
    setWeather(null)
    setError(null)
    fetchWeather()
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isNepali ? 'हालको मौसम' : 'Current Weather'}
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => setIsNepali(!isNepali)}
              className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
            >
              {isNepali ? 'English' : 'नेपाली'}
            </button>
          </div>
        </div>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-8 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
            <div className="h-16 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">
            {isNepali ? 'हालको मौसम' : 'Current Weather'}
          </h2>
          <button
            onClick={() => setIsNepali(!isNepali)}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
          >
            {isNepali ? 'English' : 'नेपाली'}
          </button>
        </div>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-red-600">!</span>
          </div>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={refreshWeather}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {isNepali ? 'फेरि प्रयास गर्नुहोस्' : 'Try Again'}
          </button>
        </div>
      </div>
    )
  }

  if (!weather) return null

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-2xl font-bold text-gray-900">
          {isNepali ? 'हालको मौसम' : 'Current Weather'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <select 
            value={selectedDistrict}
            onChange={(e) => setSelectedDistrict(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {nepalDistricts.map(district => (
              <option key={district.name} value={district.name}>
                {isNepali ? district.nepali : district.name}
              </option>
            ))}
          </select>
          <button
            onClick={() => setIsNepali(!isNepali)}
            className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full hover:bg-blue-200 transition-colors"
          >
            {isNepali ? 'English' : 'नेपाली'}
          </button>
          <button 
            onClick={refreshWeather}
            className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors"
          >
            {isNepali ? 'रिफ्रेस' : 'Refresh'}
          </button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {isNepali ? weather.locationNepali : weather.location}
          </h3>
          <span className="text-3xl font-bold text-blue-600">{weather.temperature}°C</span>
        </div>
        <p className="text-gray-600 mb-2">
          {isNepali ? weather.conditionNepali : weather.condition}
        </p>
        <p className="text-sm text-gray-500">
          {isNepali ? weather.descriptionNepali : weather.description}
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600 mb-1">
            {isNepali ? 'तापक्रम' : 'Temperature'}
          </p>
          <p className="text-xl font-semibold text-blue-600">{weather.temperature}°C</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg text-center">
          <p className="text-sm text-gray-600 mb-1">
            {isNepali ? 'आर्द्रता' : 'Humidity'}
          </p>
          <p className="text-xl font-semibold text-green-600">{weather.humidity}%</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg text-center col-span-2 md:col-span-1">
          <p className="text-sm text-gray-600 mb-1">
            {isNepali ? 'हावाको गति' : 'Wind Speed'}
          </p>
          <p className="text-xl font-semibold text-yellow-600">{weather.windSpeed} km/h</p>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? 'खेतीपातीको सुझाव' : 'Farming Recommendation'}
        </h4>
        <p className="text-sm text-gray-600">
          {weather.condition === 'Sunny' || weather.condition === 'Clear' 
            ? (isNepali ? 'फसल काट्न र खेत तयार गर्नका लागि उत्कृष्ट अवस्था।' : 'Excellent conditions for harvesting and field preparation.')
            : weather.condition.includes('Rain')
            ? (isNepali ? 'रोप्नका लागि राम्रो समय। भारी मेसिनरी प्रयोग नगर्नुहोस्।' : 'Good time for planting. Avoid heavy machinery use.')
            : (isNepali ? 'मध्यम अवस्था। गतिविधि योजना बनाउनका लागि मौसम परिवर्तन निरीक्षण गर्नुहोस्।' : 'Moderate conditions. Monitor weather changes for planning activities.')
          }
        </p>
      </div>
    </div>
  )
}
