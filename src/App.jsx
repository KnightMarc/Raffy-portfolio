import React from 'react'
import Hero from './components/Hero'
import Summary from './components/Summary'
import Skills from './components/Skills'
import ExperienceTimeline from './components/ExperienceTimeline'
import Education from './components/Education'
import Contact from './components/Contact'

function App() {
    return (
        <div className="App">
            <Hero />
            <main className="container">
                <Summary />
                <Skills />
                <ExperienceTimeline />
                <Education />
            </main>
            <Contact />
        </div>
    )
}

export default App
