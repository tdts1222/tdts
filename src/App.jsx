import { useEffect, useState } from 'react'
import './App.css'
import IntroPage from './pages/IntroPage'
import MainPage from './pages/MainPage'

function App() {
    const [showIntro, setShowIntro] = useState(true);

    useEffect(() => {
        const visited = localStorage.getItem('visited');
        if(visited) setShowIntro(false);
    }, []);

    const handleStart = () => {
        localStorage.setItem('visited', 'true');
        setShowIntro(false);
    }

    return (
        <>
            {
                showIntro ? <IntroPage onStart={handleStart}/> : <MainPage/>
            }
        </>
    )
}

export default App
