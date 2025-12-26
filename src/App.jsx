import { useState } from 'react'
import './App.css'
import IntroPage from './pages/IntroPage'
import MainPage from './pages/MainPage'

function App() {
    const [showIntro, setShowIntro] = useState(true);
    return (
        <>
            {
                showIntro ? <IntroPage onStart={() => setShowIntro(false)}/> : <MainPage/>
            }
            
        </>
    )
}

export default App
