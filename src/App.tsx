import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/header/Header'
import { Hero } from './components/hero/Hero'
import { Features } from './components/features/Features'
import { Work } from './components/work/Work'
import { Team } from './components/team/Team'
import { Footer } from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="text-white-100 ">
      <section className=''>
        <Header />
        <Hero />
        <Features />
        <Work />
        <Team />
        <Footer />
      </section>
    </main>
  )
}

export default App
