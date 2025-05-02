import React from 'react'
import StarsBackground from './components/StarsBackground'
import { Body } from './components/Body'
import Header from './components/Header'
import { Toaster } from 'react-hot-toast';
import 'boxicons/css/boxicons.min.css'
import './i18n/i18n'

const App = () => {
  return (
    <div className="min-h-screen bg-neutral-100 dark:bg-primary transition-colors duration-300 isolate">
      <Toaster position="top-right" reverseOrder={false} />
      <StarsBackground />
      <Header />
      <Body />
    </div>
  )
}

export default App