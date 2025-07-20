'use client'

import { useState } from 'react'

interface Disease {
  id: number
  name: string
  nameNepali: string
  crop: string
  cropNepali: string
  symptoms: string[]
  symptomsNepali: string[]
  causes: string[]
  causesNepali: string[]
  treatment: string[]
  treatmentNepali: string[]
  prevention: string[]
  preventionNepali: string[]
  severity: 'Low' | 'Medium' | 'High'
  severityNepali: string
}

export default function DiseaseIdentifier() {
  const [isNepali, setIsNepali] = useState(false)
  const [selectedCrop, setSelectedCrop] = useState('All')
  const [searchTerm, setSearchTerm] = useState('')

  const diseases: Disease[] = [
    {
      id: 1,
      name: 'Rice Blast',
      nameNepali: 'धान ब्लास्ट रोग',
      crop: 'Rice',
      cropNepali: 'धान',
      symptoms: [
        'Diamond-shaped spots on leaves',
        'Brown lesions with gray centers',
        'Neck rot in severe cases',
        'Reduced grain filling'
      ],
      symptomsNepali: [
        'पातमा हीराको आकारका दागहरू',
        'खैरो केन्द्र भएका खैरो घाउहरू',
        'गम्भीर अवस्थामा घाँटी सड्ने',
        'दाना भर्न कम हुने'
      ],
      causes: [
        'Fungal infection (Magnaporthe oryzae)',
        'High humidity and temperature',
        'Excessive nitrogen fertilizer',
        'Poor air circulation'
      ],
      causesNepali: [
        'फंगल संक्रमण (म्याग्नापोर्थे ओराइजे)',
        'उच्च आर्द्रता र तापक्रम',
        'अत्यधिक नाइट्रोजन मल',
        'हावा चलाचलको कमी'
      ],
      treatment: [
        'Apply fungicide (Tricyclazole)',
        'Remove infected plant parts',
        'Improve field drainage',
        'Reduce nitrogen application'
      ],
      treatmentNepali: [
        'फंगिसाइड (ट्राइसाइक्लाजोल) प्रयोग गर्नुहोस्',
        'संक्रमित बिरुवाका भागहरू हटाउनुहोस्',
        'खेतको निकास सुधार गर्नुहोस्',
        'नाइट्रोजन प्रयोग कम गर्नुहोस्'
      ],
      prevention: [
        'Use resistant varieties',
        'Proper spacing between plants',
        'Balanced fertilization',
        'Regular field monitoring'
      ],
      preventionNepali: [
        'प्रतिरोधी किस्महरू प्रयोग गर्नुहोस्',
        'बिरुवाहरू बीच उचित दूरी',
        'सन्तुलित मल प्रयोग',
        'नियमित खेत निरीक्षण'
      ],
      severity: 'High',
      severityNepali: 'उच्च'
    },
    {
      id: 2,
      name: 'Tomato Blight',
      nameNepali: 'गोलभेडा ब्लाइट',
      crop: 'Tomato',
      cropNepali: 'गोलभेडा',
      symptoms: [
        'Dark spots on leaves and stems',
        'Yellow halos around spots',
        'Fruit rot and dropping',
        'Wilting of entire plant'
      ],
      symptomsNepali: [
        'पात र डाँठमा कालो दागहरू',
        'दागहरू वरिपरि पहेंलो घेरा',
        'फल सड्ने र झर्ने',
        'सम्पूर्ण बिरुवा ओइलाउने'
      ],
      causes: [
        'Fungal infection (Phytophthora)',
        'High moisture and humidity',
        'Poor air circulation',
        'Contaminated soil or water'
      ],
      causesNepali: [
        'फंगल संक्रमण (फाइटोफ्थोरा)',
        'उच्च आर्द्रता र नमी',
        'हावा चलाचलको कमी',
        'दूषित माटो वा पानी'
      ],
      treatment: [
        'Apply copper-based fungicide',
        'Remove affected plant parts',
        'Improve drainage and ventilation',
        'Avoid overhead watering'
      ],
      treatmentNepali: [
        'तामा आधारित फंगिसाइड प्रयोग गर्नुहोस्',
        'प्रभावित बिरुवाका भागहरू हटाउनुहोस्',
        'निकास र हावा चलाचल सुधार गर्नुहोस्',
        'माथिबाट पानी हाल्नबाट बच्नुहोस्'
      ],
      prevention: [
        'Use disease-resistant varieties',
        'Proper plant spacing',
        'Drip irrigation instead of sprinkler',
        'Crop rotation'
      ],
      preventionNepali: [
        'रोग प्रतिरोधी किस्महरू प्रयोग गर्नुहोस्',
        'उचित बिरुवा दूरी',
        'स्प्रिंकलरको सट्टा ड्रिप सिंचाई',
        'बाली फेरबदल'
      ],
      severity: 'High',
      severityNepali: 'उच्च'
    },
    {
      id: 3,
      name: 'Wheat Rust',
      nameNepali: 'गहुँ रस्ट रोग',
      crop: 'Wheat',
      cropNepali: 'गहुँ',
      symptoms: [
        'Orange-red pustules on leaves',
        'Yellow streaks on leaf surface',
        'Premature leaf drying',
        'Reduced grain weight'
      ],
      symptomsNepali: [
        'पातमा सुन्तला-रातो फोकाहरू',
        'पातको सतहमा पहेंलो धर्काहरू',
        'समय भन्दा पहिले पात सुक्ने',
        'दानाको तौल कम हुने'
      ],
      causes: [
        'Fungal spores (Puccinia species)',
        'Moderate temperature (15-25°C)',
        'High humidity and dew',
        'Wind dispersal of spores'
      ],
      causesNepali: [
        'फंगल बीजाणु (पक्सिनिया प्रजाति)',
        'मध्यम तापक्रम (१५-२५°C)',
        'उच्च आर्द्रता र शीत',
        'हावाबाट बीजाणु फैलिने'
      ],
      treatment: [
        'Apply systemic fungicide',
        'Early detection and treatment',
        'Remove volunteer wheat plants',
        'Monitor weather conditions'
      ],
      treatmentNepali: [
        'सिस्टेमिक फंगिसाइड प्रयोग गर्नुहोस्',
        'चाँडो पत्ता लगाउने र उपचार',
        'स्वयंसेवी गहुँका बिरुवाहरू हटाउनुहोस्',
        'मौसमी अवस्था निरीक्षण गर्नुहोस्'
      ],
      prevention: [
        'Plant resistant wheat varieties',
        'Proper field sanitation',
        'Avoid late planting',
        'Balanced nutrition'
      ],
      preventionNepali: [
        'प्रतिरोधी गहुँका किस्महरू रोप्नुहोस्',
        'उचित खेत सफाई',
        'ढिलो रोपाइबाट बच्नुहोस्',
        'सन्तुलित पोषण'
      ],
      severity: 'Medium',
      severityNepali: 'मध्यम'
    },
    {
      id: 4,
      name: 'Potato Late Blight',
      nameNepali: 'आलु लेट ब्लाइट',
      crop: 'Potato',
      cropNepali: 'आलु',
      symptoms: [
        'Dark water-soaked spots on leaves',
        'White fuzzy growth on leaf undersides',
        'Brown rot on tubers',
        'Foul smell from infected tubers'
      ],
      symptomsNepali: [
        'पातमा कालो पानी भिजेको जस्तै दागहरू',
        'पातको तलतिर सेतो रौं जस्तो बृद्धि',
        'कन्दमा खैरो सड्ने',
        'संक्रमित कन्दबाट दुर्गन्ध'
      ],
      causes: [
        'Phytophthora infestans fungus',
        'Cool, wet weather conditions',
        'High humidity (>90%)',
        'Poor air circulation'
      ],
      causesNepali: [
        'फाइटोफ्थोरा इन्फेस्टान्स फंगस',
        'चिसो, भिजेको मौसम',
        'उच्च आर्द्रता (>९०%)',
        'हावा चलाचलको कमी'
      ],
      treatment: [
        'Apply protective fungicide',
        'Remove infected plants immediately',
        'Improve field drainage',
        'Harvest early if necessary'
      ],
      treatmentNepali: [
        'सुरक्षात्मक फंगिसाइड प्रयोग गर्नुहोस्',
        'संक्रमित बिरुवाहरू तुरुन्त हटाउनुहोस्',
        'खेतको निकास सुधार गर्नुहोस्',
        'आवश्यक भएमा चाँडो फसल काट्नुहोस्'
      ],
      prevention: [
        'Use certified disease-free seed',
        'Plant in well-drained soil',
        'Avoid overhead irrigation',
        'Regular crop monitoring'
      ],
      preventionNepali: [
        'प्रमाणित रोगमुक्त बीउ प्रयोग गर्नुहोस्',
        'राम्रो निकास भएको माटोमा रोप्नुहोस्',
        'माथिबाट सिंचाईबाट बच्नुहोस्',
        'नियमित बाली निरीक्षण'
      ],
      severity: 'High',
      severityNepali: 'उच्च'
    }
  ]

  const crops = ['All', 'Rice', 'Tomato', 'Wheat', 'Potato']
  const cropsNepali = ['सबै', 'धान', 'गोलभेडा', 'गहुँ', 'आलु']

  const filteredDiseases = diseases.filter(disease => {
    const cropMatch = selectedCrop === 'All' || disease.crop === selectedCrop
    const searchMatch = searchTerm === '' || 
      disease.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      disease.nameNepali.includes(searchTerm) ||
      disease.symptoms.some(symptom => symptom.toLowerCase().includes(searchTerm.toLowerCase()))
    return cropMatch && searchMatch
  })

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'High':
        return 'bg-red-100 text-red-800'
      case 'Medium':
        return 'bg-yellow-100 text-yellow-800'
      case 'Low':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'रोग र कीरा पहिचान' : 'Disease & Pest Identifier'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder={isNepali ? 'लक्षण खोज्नुहोस्...' : 'Search symptoms...'}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select 
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {crops.map((crop, index) => (
              <option key={crop} value={crop}>
                {isNepali ? cropsNepali[index] : crop}
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

      <div className="mb-4 text-sm text-gray-600">
        {isNepali ? `${filteredDiseases.length} रोगहरू फेला परे` : `Found ${filteredDiseases.length} diseases`}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredDiseases.map((disease) => (
          <div key={disease.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {isNepali ? disease.nameNepali : disease.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {isNepali ? disease.cropNepali : disease.crop}
                </p>
              </div>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeverityColor(disease.severity)}`}>
                {isNepali ? disease.severityNepali : disease.severity}
              </span>
            </div>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'लक्षणहरू:' : 'Symptoms:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? disease.symptomsNepali : disease.symptoms).map((symptom, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-red-500 mr-2">•</span>
                      {symptom}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'उपचार:' : 'Treatment:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? disease.treatmentNepali : disease.treatment).slice(0, 2).map((treatment, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {treatment}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-2">
                  {isNepali ? 'रोकथाम:' : 'Prevention:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? disease.preventionNepali : disease.prevention).slice(0, 2).map((prevention, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {prevention}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDiseases.length === 0 && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {isNepali ? 'कुनै रोग फेला परेन। अर्को खोजी शब्द प्रयास गर्नुहोस्।' : 'No diseases found. Try different search terms.'}
          </p>
        </div>
      )}

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? '⚠️ महत्वपूर्ण सुझाव' : '⚠️ Important Advice'}
        </h4>
        <p className="text-sm text-gray-600">
          {isNepali 
            ? 'यो केवल सामान्य जानकारी हो। गम्भीर संक्रमणका लागि स्थानीय कृषि विशेषज्ञसँग सल्लाह गर्नुहोस्।'
            : 'This is general information only. For severe infections, consult with local agricultural experts.'
          }
        </p>
      </div>
    </div>
  )
}
