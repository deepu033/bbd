import FloatingDecor from './components/FloatingDecor'
import Hero from './components/Hero'
import MessageSection from './components/MessageSection'
import Navbar from './components/Navbar'
import SectionFrame from './components/SectionFrame'
import { memories } from './data/memories'

function App() {
  const motionPreset = 'dreamy'

  const handleEnterSurprise = () => {
    const message = document.getElementById('message')
    message?.scrollIntoView({ behavior: 'smooth' })
  }

  const sections = [
    { id: 'hero', label: 'Home' },
    { id: 'message', label: 'Message' },
  ]

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <FloatingDecor />
      <Navbar sections={sections} />

      <main className="relative z-10">
        <SectionFrame index={0} preset={motionPreset}>
          <Hero photos={memories} onEnter={handleEnterSurprise} />
        </SectionFrame>

        <SectionFrame index={1} preset={motionPreset}>
          <MessageSection />
        </SectionFrame>
      </main>
    </div>
  )
}

export default App
