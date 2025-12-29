import { Button, Tab, Tabs } from "react-bootstrap";

function MainPage() {
    
    return (
        <>
            <Tabs defaultActiveKey="all" transition={false} id="tab" className="mb-3" justify>
                <Tab eventKey="todoList" title="TodoList">
                    Tab content for Home
                </Tab>
                <Tab eventKey="all" title="All">
                    Tab content for Profile
                </Tab>
                <Tab eventKey="timerStopwatch" title="TimerStopwatch">
                    Tab content for Loooonger Tab
                </Tab>
            </Tabs>

            {/* 테스트용 */}
            <Button variant="danger" onClick={() => {
                localStorage.removeItem('visited');
                alert('localStorage 리셋');
            }}>테스트용 localStorage 리셋</Button>
        </>
    )
}

export default MainPage;