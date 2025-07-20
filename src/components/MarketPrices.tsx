'use client'

import { useState, useEffect } from 'react'

interface CropPrice {
  id: number
  name: string
  nameNepali: string
  currentPrice: number
  previousPrice: number
  unit: string
  market: string
  lastUpdated: string
  trend: 'up' | 'down' | 'stable'
}

export default function MarketPrices() {
  const [prices, setPrices] = useState<CropPrice[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [selectedMarket, setSelectedMarket] = useState('All Markets')

  useEffect(() => {
    const fetchMarketPrices = async () => {
      try {
        setLoading(true)
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1200))

        // Mock market data for major Nepali crops
        const mockPrices: CropPrice[] = [
          {
            id: 1,
            name: 'Rice',
            nameNepali: 'चामल',
            currentPrice: 65,
            previousPrice: 62,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'up'
          },
          {
            id: 2,
            name: 'Wheat',
            nameNepali: 'गहुँ',
            currentPrice: 45,
            previousPrice: 47,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'down'
          },
          {
            id: 3,
            name: 'Maize',
            nameNepali: 'मकै',
            currentPrice: 35,
            previousPrice: 35,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'stable'
          },
          {
            id: 4,
            name: 'Potato',
            nameNepali: 'आलु',
            currentPrice: 40,
            previousPrice: 38,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'up'
          },
          {
            id: 5,
            name: 'Tomato',
            nameNepali: 'गोलभेडा',
            currentPrice: 80,
            previousPrice: 85,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'down'
          },
          {
            id: 6,
            name: 'Onion',
            nameNepali: 'प्याज',
            currentPrice: 55,
            previousPrice: 52,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'up'
          },
          {
            id: 7,
            name: 'Cabbage',
            nameNepali: 'बन्दागोभी',
            currentPrice: 25,
            previousPrice: 25,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'stable'
          },
          {
            id: 8,
            name: 'Cauliflower',
            nameNepali: 'काउली',
            currentPrice: 30,
            previousPrice: 32,
            unit: 'per kg',
            market: 'Kalimati',
            lastUpdated: '2 hours ago',
            trend: 'down'
          }
        ]

        setPrices(mockPrices)
        setError(null)
      } catch (err) {
        setError('Market prices unavailable. Please try again later.')
        setPrices([])
      } finally {
        setLoading(false)
      }
    }

    fetchMarketPrices()
  }, [])

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case 'up':
        return <span className="text-green-600 font-bold">↗</span>
      case 'down':
        return <span className="text-red-600 font-bold">↘</span>
      default:
        return <span className="text-gray-600 font-bold">→</span>
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case 'up':
        return 'text-green-600'
      case 'down':
        return 'text-red-600'
      default:
        return 'text-gray-600'
    }
  }

  const refreshPrices = () => {
    setPrices([])
    setError(null)
    setLoading(true)
    // Re-trigger the effect
    setTimeout(() => {
      const event = new Event('refresh-prices')
      window.dispatchEvent(event)
    }, 100)
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Prices</h2>
        <div className="animate-pulse">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="border rounded-lg p-4">
                <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
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
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Prices</h2>
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-red-600">!</span>
          </div>
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={refreshPrices}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Market Prices</h2>
        <div className="flex gap-4">
          <select 
            value={selectedMarket}
            onChange={(e) => setSelectedMarket(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option>All Markets</option>
            <option>Kalimati</option>
            <option>Balkhu</option>
            <option>Pokhara</option>
          </select>
          <button 
            onClick={refreshPrices}
            className="text-green-600 hover:text-green-700 text-sm font-medium transition-colors"
          >
            Refresh
          </button>
        </div>
      </div>

      <div className="mb-4 text-sm text-gray-600">
        Last updated: {prices.length > 0 ? prices[0].lastUpdated : 'N/A'} • Prices in NPR
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {prices.map((crop) => (
          <div key={crop.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-gray-900">{crop.name}</h3>
                <p className="text-sm text-gray-500">{crop.nameNepali}</p>
              </div>
              {getTrendIcon(crop.trend)}
            </div>
            
            <div className="mb-2">
              <span className="text-2xl font-bold text-gray-900">₹{crop.currentPrice}</span>
              <span className="text-sm text-gray-500 ml-1">{crop.unit}</span>
            </div>
            
            <div className="flex justify-between items-center text-sm">
              <span className="text-gray-600">{crop.market}</span>
              <span className={`${getTrendColor(crop.trend)} font-medium`}>
                {crop.trend === 'up' ? '+' : crop.trend === 'down' ? '-' : ''}
                {crop.trend !== 'stable' ? Math.abs(crop.currentPrice - crop.previousPrice) : '0'}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">Market Insights</h4>
        <p className="text-sm text-gray-600">
          Prices are updated regularly from major markets across Nepal. 
          Consider seasonal variations and transportation costs when planning your sales.
        </p>
      </div>
    </div>
  )
}
