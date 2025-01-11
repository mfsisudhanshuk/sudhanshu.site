'use client'

import { useState } from 'react'
import Resume from '../components/Resume'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ThemeSwitcher from '../components/ThemeSwitcher'
import { themes, Theme } from '../styles/themes'

export default function Home() {
  const [currentTheme, setCurrentTheme] = useState('sunset')

  return (
    <div className={`min-h-screen ${themes[currentTheme].background}`} style={{ background: themes[currentTheme].backgroundStyle }}>
      <Header theme={themes[currentTheme] as Theme} />
      <main className="pt-16 pb-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <ThemeSwitcher currentTheme={currentTheme} setTheme={setCurrentTheme} />
          <Resume theme={themes[currentTheme] as Theme} />
        </div>
      </main>
      <Footer theme={themes[currentTheme] as Theme} />
    </div>
  )
}

