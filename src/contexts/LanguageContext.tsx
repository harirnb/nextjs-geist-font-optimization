'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface LanguageContextType {
  isNepali: boolean
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [isNepali, setIsNepali] = useState(false)

  const toggleLanguage = () => {
    setIsNepali(!isNepali)
  }

  return (
    <LanguageContext.Provider value={{ isNepali, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
