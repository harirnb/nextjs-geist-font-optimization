'use client'

import { useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

interface LoanOption {
  id: number
  name: string
  nameNepali: string
  bank: string
  bankNepali: string
  type: string
  typeNepali: string
  interestRate: string
  maxAmount: string
  maxAmountNepali: string
  tenure: string
  tenureNepali: string
  collateral: string
  collateralNepali: string
  features: string[]
  featuresNepali: string[]
  eligibility: string[]
  eligibilityNepali: string[]
  documents: string[]
  documentsNepali: string[]
  processingTime: string
  processingTimeNepali: string
  contactInfo: string
  contactInfoNepali: string
}

export default function LoanCredit() {
  const { isNepali } = useLanguage()
  const [selectedType, setSelectedType] = useState('All')
  const [loanAmount, setLoanAmount] = useState('')
  const [calculatedEMI, setCalculatedEMI] = useState<number | null>(null)

  const loanOptions: LoanOption[] = [
    {
      id: 1,
      name: 'Kisan Credit Card (KCC)',
      nameNepali: 'किसान क्रेडिट कार्ड',
      bank: 'Nepal Bank Limited',
      bankNepali: 'नेपाल बैंक लिमिटेड',
      type: 'Credit Card',
      typeNepali: 'क्रेडिट कार्ड',
      interestRate: '7-9% per annum',
      maxAmount: 'Up to NPR 3,00,000',
      maxAmountNepali: '३ लाख रुपैयाँ सम्म',
      tenure: 'Revolving credit facility',
      tenureNepali: 'घुम्ती ऋण सुविधा',
      collateral: 'Crop/Land mortgage',
      collateralNepali: 'बाली/जग्गा धितो',
      features: [
        'Flexible repayment based on harvest',
        'No processing fee for first year',
        'Insurance coverage included',
        'ATM and POS facility'
      ],
      featuresNepali: [
        'फसलको आधारमा लचिलो भुक्तानी',
        'पहिलो वर्ष कुनै प्रशोधन शुल्क छैन',
        'बीमा सुरक्षा समावेश',
        'एटीएम र पीओएस सुविधा'
      ],
      eligibility: [
        'Age 18-65 years',
        'Minimum 2 years farming experience',
        'Land ownership documents',
        'Good credit history'
      ],
      eligibilityNepali: [
        '१८-६५ वर्ष उमेर',
        'न्यूनतम २ वर्ष खेती अनुभव',
        'जग्गाधनी कागजात',
        'राम्रो ऋण इतिहास'
      ],
      documents: [
        'Citizenship certificate',
        'Land ownership certificate',
        'Income proof',
        'Passport size photos'
      ],
      documentsNepali: [
        'नागरिकता प्रमाणपत्र',
        'जग्गाधनी प्रमाणपत्र',
        'आय प्रमाण',
        'पासपोर्ट साइज फोटो'
      ],
      processingTime: '7-10 working days',
      processingTimeNepali: '७-१० कार्य दिन',
      contactInfo: 'Call: 01-4200000 | Branch: Kathmandu',
      contactInfoNepali: 'फोन: ०१-४२००००० | शाखा: काठमाडौं'
    },
    {
      id: 2,
      name: 'Agricultural Term Loan',
      nameNepali: 'कृषि मुद्दती ऋण',
      bank: 'Agricultural Development Bank',
      bankNepali: 'कृषि विकास बैंक',
      type: 'Term Loan',
      typeNepali: 'मुद्दती ऋण',
      interestRate: '6-8% per annum',
      maxAmount: 'Up to NPR 10,00,000',
      maxAmountNepali: '१० लाख रुपैयाँ सम्म',
      tenure: '1-7 years',
      tenureNepali: '१-७ वर्ष',
      collateral: 'Land/Property mortgage',
      collateralNepali: 'जग्गा/सम्पत्ति धितो',
      features: [
        'Competitive interest rates',
        'Flexible repayment schedule',
        'Grace period available',
        'Technical support included'
      ],
      featuresNepali: [
        'प्रतिस्पर्धी ब्याज दर',
        'लचिलो भुक्तानी तालिका',
        'छुट अवधि उपलब्ध',
        'प्राविधिक सहयोग समावेश'
      ],
      eligibility: [
        'Registered farmer',
        'Minimum 5 ropani cultivable land',
        'Project feasibility report',
        'No loan default history'
      ],
      eligibilityNepali: [
        'दर्ता भएका किसान',
        'न्यूनतम ५ रोपनी खेतीयोग्य जग्गा',
        'परियोजना सम्भाव्यता प्रतिवेदन',
        'ऋण नतिरेको इतिहास नभएको'
      ],
      documents: [
        'Project proposal',
        'Land valuation report',
        'Income and expenditure statement',
        'Guarantor documents'
      ],
      documentsNepali: [
        'परियोजना प्रस्ताव',
        'जग्गा मूल्याङ्कन प्रतिवेदन',
        'आय खर्च विवरण',
        'जमानतदारको कागजात'
      ],
      processingTime: '15-20 working days',
      processingTimeNepali: '१५-२० कार्य दिन',
      contactInfo: 'Call: 01-4220000 | Website: www.adbl.gov.np',
      contactInfoNepali: 'फोन: ०१-४२२०००० | वेबसाइट: www.adbl.gov.np'
    },
    {
      id: 3,
      name: 'Micro Finance for Women Farmers',
      nameNepali: 'महिला किसानका लागि लघुवित्त',
      bank: 'Nirdhan Utthan Bank',
      bankNepali: 'निर्धन उत्थान बैंक',
      type: 'Micro Finance',
      typeNepali: 'लघुवित्त',
      interestRate: '12-15% per annum',
      maxAmount: 'Up to NPR 50,000',
      maxAmountNepali: '५० हजार रुपैयाँ सम्म',
      tenure: '6 months - 2 years',
      tenureNepali: '६ महिना - २ वर्ष',
      collateral: 'Group guarantee',
      collateralNepali: 'समूहगत जमानत',
      features: [
        'No collateral required',
        'Group-based lending',
        'Financial literacy training',
        'Weekly repayment option'
      ],
      featuresNepali: [
        'कुनै धितो आवश्यक छैन',
        'समूहमा आधारित ऋण',
        'वित्तीय साक्षरता तालिम',
        'साप्ताहिक भुक्तानी विकल्प'
      ],
      eligibility: [
        'Women aged 18-60 years',
        'Member of women group',
        'Involved in agriculture/livestock',
        'Regular income source'
      ],
      eligibilityNepali: [
        '१८-६० वर्ष उमेरकी महिला',
        'महिला समूहको सदस्य',
        'कृषि/पशुपालनमा संलग्न',
        'नियमित आयको स्रोत'
      ],
      documents: [
        'Group membership certificate',
        'Citizenship certificate',
        'Income proof',
        'Group guarantee letter'
      ],
      documentsNepali: [
        'समूह सदस्यता प्रमाणपत्र',
        'नागरिकता प्रमाणपत्र',
        'आय प्रमाण',
        'समूहगत जमानत पत्र'
      ],
      processingTime: '3-5 working days',
      processingTimeNepali: '३-५ कार्य दिन',
      contactInfo: 'Call: 01-4444444 | Toll Free: 16600101010',
      contactInfoNepali: 'फोन: ०१-४४४४४४४ | टोल फ्री: १६६००१०१०१०'
    },
    {
      id: 4,
      name: 'Digital Agriculture Loan',
      nameNepali: 'डिजिटल कृषि ऋण',
      bank: 'Kumari Bank',
      bankNepali: 'कुमारी बैंक',
      type: 'Digital Loan',
      typeNepali: 'डिजिटल ऋण',
      interestRate: '8-10% per annum',
      maxAmount: 'Up to NPR 5,00,000',
      maxAmountNepali: '५ लाख रुपैयाँ सम्म',
      tenure: '1-5 years',
      tenureNepali: '१-५ वर्ष',
      collateral: 'Digital asset verification',
      collateralNepali: 'डिजिटल सम्पत्ति प्रमाणीकरण',
      features: [
        'Online application process',
        'Quick approval within 24 hours',
        'Digital documentation',
        'Mobile banking integration'
      ],
      featuresNepali: [
        'अनलाइन आवेदन प्रक्रिया',
        '२४ घण्टामा छिटो स्वीकृति',
        'डिजिटल कागजात',
        'मोबाइल बैंकिङ एकीकरण'
      ],
      eligibility: [
        'Tech-savvy farmers',
        'Smartphone with internet',
        'Digital payment history',
        'Age 21-55 years'
      ],
      eligibilityNepali: [
        'प्रविधि जान्ने किसान',
        'इन्टरनेट सहितको स्मार्टफोन',
        'डिजिटल भुक्तानी इतिहास',
        '२१-५५ वर्ष उमेर'
      ],
      documents: [
        'Digital ID verification',
        'Bank transaction history',
        'Crop production records',
        'Mobile number verification'
      ],
      documentsNepali: [
        'डिजिटल परिचय प्रमाणीकरण',
        'बैंक कारोबार इतिहास',
        'बाली उत्पादन रेकर्ड',
        'मोबाइल नम्बर प्रमाणीकरण'
      ],
      processingTime: '1-2 working days',
      processingTimeNepali: '१-२ कार्य दिन',
      contactInfo: 'App: Kumari Mobile | Call: 01-5970000',
      contactInfoNepali: 'एप: कुमारी मोबाइल | फोन: ०१-५९७००००'
    }
  ]

  const loanTypes = [
    { en: 'All', np: 'सबै' },
    { en: 'Credit Card', np: 'क्रेडिट कार्ड' },
    { en: 'Term Loan', np: 'मुद्दती ऋण' },
    { en: 'Micro Finance', np: 'लघुवित्त' },
    { en: 'Digital Loan', np: 'डिजिटल ऋण' }
  ]

  const filteredLoans = loanOptions.filter(loan => 
    selectedType === 'All' || loan.type === selectedType
  )

  const calculateEMI = () => {
    if (!loanAmount) return
    
    const principal = parseFloat(loanAmount)
    const rate = 0.08 / 12 // Assuming 8% annual rate
    const tenure = 36 // 3 years in months
    
    const emi = (principal * rate * Math.pow(1 + rate, tenure)) / (Math.pow(1 + rate, tenure) - 1)
    setCalculatedEMI(Math.round(emi))
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4 lg:mb-0">
          {isNepali ? 'ऋण र क्रेडिट सुविधा' : 'Loan & Credit Facilities'}
        </h2>
        <select 
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          {loanTypes.map(type => (
            <option key={type.en} value={type.en}>
              {isNepali ? type.np : type.en}
            </option>
          ))}
        </select>
      </div>

      {/* EMI Calculator */}
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="font-semibold text-gray-800 mb-3">
          {isNepali ? 'EMI गणना यन्त्र' : 'EMI Calculator'}
        </h3>
        <div className="flex flex-col sm:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm text-gray-600 mb-1">
              {isNepali ? 'ऋण रकम (रुपैयाँ):' : 'Loan Amount (NPR):'}
            </label>
            <input
              type="number"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              placeholder={isNepali ? 'जस्तै: 100000' : 'e.g., 100000'}
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={calculateEMI}
            disabled={!loanAmount}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-gray-300 transition-colors"
          >
            {isNepali ? 'गणना' : 'Calculate'}
          </button>
        </div>
        {calculatedEMI && (
          <div className="mt-3 p-3 bg-white rounded">
            <p className="text-sm text-gray-600">
              {isNepali ? 'अनुमानित मासिक EMI:' : 'Estimated Monthly EMI:'}
            </p>
            <p className="text-xl font-bold text-blue-600">
              NPR {calculatedEMI.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">
              {isNepali ? '* ८% वार्षिक ब्याज र ३ वर्षको आधारमा' : '* Based on 8% annual interest for 3 years'}
            </p>
          </div>
        )}
      </div>

      <div className="mb-4 text-sm text-gray-600">
        {isNepali ? `${filteredLoans.length} ऋण विकल्पहरू उपलब्ध` : `${filteredLoans.length} loan options available`}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredLoans.map((loan) => (
          <div key={loan.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="mb-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {isNepali ? loan.nameNepali : loan.name}
              </h3>
              <p className="text-sm text-gray-600">
                {isNepali ? loan.bankNepali : loan.bank}
              </p>
              <span className="inline-block bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs mt-2">
                {isNepali ? loan.typeNepali : loan.type}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <p className="text-xs text-gray-500">
                  {isNepali ? 'ब्याज दर:' : 'Interest Rate:'}
                </p>
                <p className="font-semibold text-green-600">{loan.interestRate}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">
                  {isNepali ? 'अधिकतम रकम:' : 'Max Amount:'}
                </p>
                <p className="font-semibold text-blue-600">
                  {isNepali ? loan.maxAmountNepali : loan.maxAmount}
                </p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="font-medium text-gray-800 mb-1">
                  {isNepali ? 'मुख्य विशेषताहरू:' : 'Key Features:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? loan.featuresNepali : loan.features).slice(0, 2).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-green-500 mr-2">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-gray-800 mb-1">
                  {isNepali ? 'योग्यता:' : 'Eligibility:'}
                </h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {(isNepali ? loan.eligibilityNepali : loan.eligibility).slice(0, 2).map((criteria, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {criteria}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="pt-3 border-t border-gray-100">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{isNepali ? 'प्रशोधन समय:' : 'Processing Time:'}</span>
                  <span>{isNepali ? loan.processingTimeNepali : loan.processingTime}</span>
                </div>
                <p className="text-xs text-gray-600">
                  {isNepali ? loan.contactInfoNepali : loan.contactInfo}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
        <h4 className="font-semibold text-gray-800 mb-2">
          {isNepali ? '💡 ऋण लिनु अघि सम्झनुहोस्' : '💡 Remember Before Taking Loan'}
        </h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            {isNepali 
              ? 'आफ्नो भुक्तानी क्षमता अनुसार ऋण लिनुहोस्'
              : 'Borrow according to your repayment capacity'
            }
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            {isNepali 
              ? 'सबै नियम र सर्तहरू राम्ररी पढेर बुझ्नुहोस्'
              : 'Read and understand all terms and conditions carefully'
            }
          </li>
          <li className="flex items-start">
            <span className="text-yellow-600 mr-2">•</span>
            {isNepali 
              ? 'समयमै EMI तिरेर आफ्नो क्रेडिट स्कोर राम्रो राख्नुहोस्'
              : 'Pay EMI on time to maintain good credit score'
            }
          </li>
        </ul>
      </div>
    </div>
  )
}
