'use client'

import { useState, useEffect } from 'react'

interface FarmingTip {
  id: number
  title: string
  titleNepali: string
  category: string
  categoryNepali: string
  season: string
  seasonNepali: string
  description: string
  descriptionNepali: string
  steps: string[]
  stepsNepali: string[]
  publishedDate: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  difficultyNepali: string
  estimatedTime: string
  estimatedTimeNepali: string
}

export default function FarmingTips() {
  const [tips, setTips] = useState<FarmingTip[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedSeason, setSelectedSeason] = useState('All')
  const [isNepali, setIsNepali] = useState(false)

  useEffect(() => {
    fetchFarmingTips()
  }, [])

  const fetchFarmingTips = async () => {
    try {
      setLoading(true)
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000))

      // Enhanced farming tips data with Nepali translations
      const mockTips: FarmingTip[] = [
        {
          id: 1,
          title: 'Optimal Rice Planting Techniques',
          titleNepali: 'धान रोप्ने उत्तम प्रविधि',
          category: 'Crop Management',
          categoryNepali: 'बाली व्यवस्थापन',
          season: 'Monsoon',
          seasonNepali: 'मनसुन',
          description: 'Learn the best practices for rice planting during monsoon season to maximize yield and minimize pest problems.',
          descriptionNepali: 'उत्पादन बढाउन र कीराको समस्या कम गर्न मनसुनमा धान रोप्ने उत्तम तरिकाहरू सिक्नुहोस्।',
          steps: [
            'Prepare the field by plowing and leveling',
            'Soak seeds for 24 hours before planting',
            'Maintain 2-3 cm water level in the field',
            'Plant seedlings 20cm apart in rows',
            'Apply organic fertilizer after 2 weeks'
          ],
          stepsNepali: [
            'खेत जोतेर र समतल गरेर तयार गर्नुहोस्',
            'रोप्नु अघि बीउलाई २४ घण्टा भिजाउनुहोस्',
            'खेतमा २-३ सेमी पानीको सतह राख्नुहोस्',
            'बिरुवाहरू २० सेमी दूरीमा लाइनमा रोप्नुहोस्',
            '२ हप्ता पछि जैविक मल प्रयोग गर्नुहोस्'
          ],
          publishedDate: '2024-01-15',
          difficulty: 'Intermediate',
          difficultyNepali: 'मध्यम',
          estimatedTime: '2-3 days',
          estimatedTimeNepali: '२-३ दिन'
        },
        {
          id: 2,
          title: 'Natural Pest Control Methods',
          titleNepali: 'प्राकृतिक कीरा नियन्त्रण विधि',
          category: 'Pest Management',
          categoryNepali: 'कीरा व्यवस्थापन',
          season: 'All Seasons',
          seasonNepali: 'सबै मौसम',
          description: 'Effective organic methods to control common pests without harmful chemicals.',
          descriptionNepali: 'हानिकारक रसायन बिना सामान्य कीराहरू नियन्त्रण गर्ने प्रभावकारी जैविक विधिहरू।',
          steps: [
            'Use neem oil spray for aphids and caterpillars',
            'Plant marigolds around crops as natural repellent',
            'Encourage beneficial insects like ladybugs',
            'Use sticky traps for flying insects',
            'Rotate crops to break pest cycles'
          ],
          stepsNepali: [
            'माहुरी र किराहरूका लागि नीमको तेल छर्कनुहोस्',
            'प्राकृतिक भगाउने रूपमा बालीको वरिपरि सयपत्री रोप्नुहोस्',
            'लेडीबग जस्ता फाइदाजनक कीराहरूलाई प्रोत्साहन दिनुहोस्',
            'उड्ने कीराहरूका लागि टाँसिने पासो प्रयोग गर्नुहोस्',
            'कीराको चक्र तोड्न बाली फेरबदल गर्नुहोस्'
          ],
          publishedDate: '2024-01-10',
          difficulty: 'Beginner',
          difficultyNepali: 'सुरुवाती',
          estimatedTime: '1-2 hours',
          estimatedTimeNepali: '१-२ घण्टा'
        },
        {
          id: 3,
          title: 'Soil Health Improvement',
          titleNepali: 'माटोको स्वास्थ्य सुधार',
          category: 'Soil Management',
          categoryNepali: 'माटो व्यवस्थापन',
          season: 'Pre-Monsoon',
          seasonNepali: 'मनसुन पूर्व',
          description: 'Essential techniques to improve soil fertility and structure for better crop growth.',
          descriptionNepali: 'राम्रो बाली वृद्धिका लागि माटोको उर्वरता र संरचना सुधार गर्ने आवश्यक प्रविधिहरू।',
          steps: [
            'Test soil pH and nutrient levels',
            'Add compost and organic matter',
            'Practice crop rotation',
            'Use cover crops during fallow periods',
            'Avoid over-tilling to preserve soil structure'
          ],
          stepsNepali: [
            'माटोको pH र पोषक तत्वको स्तर जाँच गर्नुहोस्',
            'कम्पोस्ट र जैविक पदार्थ थप्नुहोस्',
            'बाली फेरबदल अभ्यास गर्नुहोस्',
            'बाँझो अवधिमा ढाक्ने बाली प्रयोग गर्नुहोस्',
            'माटोको संरचना जोगाउन अधिक जोत्नबाट बच्नुहोस्'
          ],
          publishedDate: '2024-01-08',
          difficulty: 'Intermediate',
          difficultyNepali: 'मध्यम',
          estimatedTime: '1 week',
          estimatedTimeNepali: '१ हप्ता'
        },
        {
          id: 4,
          title: 'Water Conservation Techniques',
          titleNepali: 'पानी संरक्षण प्रविधि',
          category: 'Water Management',
          categoryNepali: 'पानी व्यवस्थापन',
          season: 'Dry Season',
          seasonNepali: 'सुख्खा मौसम',
          description: 'Smart irrigation methods to conserve water while maintaining crop health.',
          descriptionNepali: 'बालीको स्वास्थ्य कायम राख्दै पानी संरक्षण गर्ने स्मार्ट सिंचाई विधिहरू।',
          steps: [
            'Install drip irrigation systems',
            'Use mulching to reduce evaporation',
            'Collect and store rainwater',
            'Schedule irrigation during cooler hours',
            'Monitor soil moisture regularly'
          ],
          stepsNepali: [
            'ड्रिप सिंचाई प्रणाली स्थापना गर्नुहोस्',
            'वाष्पीकरण कम गर्न मल्चिङ प्रयोग गर्नुहोस्',
            'वर्षाको पानी संकलन र भण्डारण गर्नुहोस्',
            'चिसो समयमा सिंचाईको समय तालिका बनाउनुहोस्',
            'माटोको आर्द्रता नियमित निरीक्षण गर्नुहोस्'
          ],
          publishedDate: '2024-01-05',
          difficulty: 'Advanced',
          difficultyNepali: 'उन्नत',
          estimatedTime: '3-5 days',
          estimatedTimeNepali: '३-५ दिन'
        },
        {
          id: 5,
          title: 'Vegetable Garden Planning',
          titleNepali: 'तरकारी बगैंचा योजना',
          category: 'Garden Planning',
          categoryNepali: 'बगैंचा योजना',
          season: 'All Seasons',
          seasonNepali: 'सबै मौसम',
          description: 'Plan your vegetable garden for year-round production and maximum efficiency.',
          descriptionNepali: 'वर्षभरि उत्पादन र अधिकतम दक्षताका लागि आफ्नो तरकारी बगैंचाको योजना बनाउनुहोस्।',
          steps: [
            'Choose vegetables suitable for your climate',
            'Plan succession planting for continuous harvest',
            'Design companion planting layouts',
            'Prepare raised beds for better drainage',
            'Schedule planting based on seasonal calendar'
          ],
          stepsNepali: [
            'आफ्नो मौसमका लागि उपयुक्त तरकारीहरू छान्नुहोस्',
            'निरन्तर फसलका लागि क्रमिक रोपाइको योजना बनाउनुहोस्',
            'साथी रोपाइको लेआउट डिजाइन गर्नुहोस्',
            'राम्रो निकासका लागि उठाइएको क्यारी तयार गर्नुहोस्',
            'मौसमी क्यालेन्डरको आधारमा रोपाइको समयतालिका बनाउनुहोस्'
          ],
          publishedDate: '2024-01-03',
          difficulty: 'Beginner',
          difficultyNepali: 'सुरुवाती',
          estimatedTime: '2-3 hours',
          estimatedTimeNepali: '२-३ घण्टा'
        },
        {
          id: 6,
          title: 'Organic Fertilizer Preparation',
          titleNepali: 'जैविक मल तयारी',
          category: 'Fertilization',
          categoryNepali: 'मल प्रयोग',
          season: 'All Seasons',
          seasonNepali: 'सबै मौसम',
          description: 'Make your own organic fertilizers using kitchen waste and farm materials.',
          descriptionNepali: 'भान्साको फोहोर र खेतका सामग्रीहरू प्रयोग गरेर आफ्नै जैविक मल बनाउनुहोस्।',
          steps: [
            'Collect kitchen scraps and farm waste',
            'Layer brown and green materials in compost bin',
            'Turn compost pile every 2 weeks',
            'Maintain proper moisture levels',
            'Use finished compost after 3-4 months'
          ],
          stepsNepali: [
            'भान्साको फोहोर र खेतको फोहोर संकलन गर्नुहोस्',
            'कम्पोस्ट बिनमा खैरो र हरियो सामग्रीको तह लगाउनुहोस्',
            'प्रत्येक २ हप्तामा कम्पोस्टको थुप्रो पल्टाउनुहोस्',
            'उचित आर्द्रताको स्तर कायम राख्नुहोस्',
            '३-४ महिना पछि तयार भएको कम्पोस्ट प्रयोग गर्नुहोस्'
          ],
          publishedDate: '2024-01-01',
          difficulty: 'Beginner',
          difficultyNepali: 'सुरुवाती',
          estimatedTime: '30 minutes setup',
          estimatedTimeNepali: '३० मिनेट सेटअप'
        }
      ]

      setTips(mockTips)
      setError(null)
    } catch (err) {
      setError(isNepali ? 'खेतीपातीका सुझावहरू लोड गर्न सकिएन। कृपया फेरि प्रयास गर्नुहोस्।' : 'Unable to load farming tips. Please try again later.')
      setTips([])
    } finally {
      setLoading(false)
    }
  }

  const categories = [
    { en: 'All', np: 'सबै' },
    { en: 'Crop Management', np: 'बाली व्यवस्थापन' },
    { en: 'Pest Management', np: 'कीरा व्यवस्थापन' },
    { en: 'Soil Management', np: 'माटो व्यवस्थापन' },
    { en: 'Water Management', np: 'पानी व्यवस्थापन' },
    { en: 'Garden Planning', np: 'बगैंचा योजना' },
    { en: 'Fertilization', np: 'मल प्रयोग' }
  ]

  const seasons = [
    { en: 'All', np: 'सबै' },
    { en: 'All Seasons', np: 'सबै मौसम' },
    { en: 'Monsoon', np: 'मनसुन' },
    { en: 'Pre-Monsoon', np: 'मनसुन पूर्व' },
    { en: 'Dry Season', np: 'सुख्खा मौसम' }
  ]

  const filteredTips = tips.filter(tip => {
    const categoryMatch = selectedCategory === 'All' || tip.category === selectedCategory
    const seasonMatch = selectedSeason === 'All' || tip.season === selectedSeason
    return categoryMatch && seasonMatch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return 'bg-green-100 text-green-800'
      case 'Intermediate':
        return 'bg-yellow-100 text-yellow-800'
      case 'Advanced':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const refreshTips = () => {
    setTips([])
    setError(null)
    fetchFarmingTips()
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isNepali ? 'खेतीपातीका सुझावहरू' : 'Farming Tips'}
        </h2>
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="border rounded-lg p-6">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                <div className="h-3 bg-gray-200 rounded w-full mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="space-y-2">
                  <div className="h-2 bg-gray-200 rounded w-full"></div>
                  <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {isNepali ? 'खेतीपातीका सुझावहरू' : 'Farming Tips'}
        </h2>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-red-600">!</span>
          </div>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={refreshTips}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            {isNepali ? 'फेरि प्रयास गर्नुहोस्' : 'Try Again'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'खेतीपातीका सुझावहरू' : 'Farming Tips'}
        </h2>
        <div className="flex flex-col sm:flex-row gap-4">
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
          <select 
            value={selectedSeason}
            onChange={(e) => setSelectedSeason(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            {seasons.map(season => (
              <option key={season.en} value={season.en}>
                {isNepali ? season.np : season.en}
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
            onClick={refreshTips}
            className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
          >
            {isNepali ? 'रिफ्रेस' : 'Refresh'}
          </button>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        {isNepali ? `${filteredTips.length} सुझावहरू देखाइँदै` : `Showing ${filteredTips.length} tips`}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTips.map((tip) => (
          <div key={tip.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex-1">
                {isNepali ? tip.titleNepali : tip.title}
              </h3>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ml-2 ${getDifficultyColor(tip.difficulty)}`}>
                {isNepali ? tip.difficultyNepali : tip.difficulty}
              </span>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                {isNepali ? tip.categoryNepali : tip.category}
              </span>
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                {isNepali ? tip.seasonNepali : tip.season}
              </span>
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs">
                {isNepali ? tip.estimatedTimeNepali : tip.estimatedTime}
              </span>
            </div>
            
            <p className="text-gray-600 mb-4 text-sm">
              {isNepali ? tip.descriptionNepali : tip.description}
            </p>
            
            <div className="mb-4">
              <h4 className="font-medium text-gray-800 mb-2">
                {isNepali ? 'चरणहरू:' : 'Steps:'}
              </h4>
              <ul className="space-y-1">
                {(isNepali ? tip.stepsNepali : tip.steps).slice(0, 3).map((step, index) => (
                  <li key={index} className="text-sm text-gray-600 flex items-start">
                    <span className="text-green-600 mr-2 font-bold">{index + 1}.</span>
                    {step}
                  </li>
                ))}
                {tip.steps.length > 3 && (
                  <li className="text-sm text-gray-500 italic">
                    {isNepali ? `+${tip.steps.length - 3} थप चरणहरू...` : `+${tip.steps.length - 3} more steps...`}
                  </li>
                )}
              </ul>
            </div>
            
            <div className="text-xs text-gray-500">
              {isNepali ? 'प्रकाशित:' : 'Published:'} {new Date(tip.publishedDate).toLocaleDateString()}
            </div>
          </div>
        ))}
      </div>

      {filteredTips.length === 0 && !loading && (
        <div className="text-center py-8">
          <p className="text-gray-500">
            {isNepali ? 'चयन गरिएका फिल्टरहरूका लागि कुनै सुझावहरू फेला परेन।' : 'No tips found for the selected filters.'}
          </p>
        </div>
      )}

      <div className="mt-6 p-4 bg-green-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? 'विशेषज्ञ सल्लाह' : 'Expert Advice'}
        </h4>
        <p className="text-sm text-gray-600">
          {isNepali 
            ? 'यी सुझावहरू नेपालभरका अनुभवी किसानहरू र कृषि विशेषज्ञहरूबाट संकलन गरिएका छन्। सधैं आफ्नो स्थानीय अवस्थालाई विचार गर्नुहोस् र व्यक्तिगत सल्लाहका लागि स्थानीय कृषि विस्तार अधिकारीहरूसँग सल्लाह गर्नुहोस्।'
            : 'These tips are compiled from experienced farmers and agricultural experts across Nepal. Always consider your local conditions and consult with local agricultural extension officers for personalized advice.'
          }
        </p>
      </div>
    </div>
  )
}
