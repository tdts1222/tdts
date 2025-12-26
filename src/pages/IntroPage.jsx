import { useState } from 'react';
import './css/Intro.css'
import { Button, Form } from 'react-bootstrap';
import introImg from '../assets/images/introImg.png'

function IntroPage({onStart}) {
    const [checked, setChecked] = useState(false);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center vh-100'>
            <p>해당 사이트는 PC 또는 스마트폰, 태블릿을 가로 화면으로 사용하는 환경에 최적화되어 있으므로, 가로 사용을 권장합니다.</p>            
            
            {/* Image created by ChatGPT */}
            <img src={introImg} className='intro-image'/>
            <p>(위 화면은 다시 나타나지 않습니다)</p>
            
            <Form.Check type="checkbox" label="이해했습니다" checked={checked} onChange={ (e) => setChecked(e.target.checked) }></Form.Check>
            
            <Button variant="secondary" disabled={!checked} className='mt-3' onClick={onStart}>시작하기</Button>
        </div>
    )
}

export default IntroPage;