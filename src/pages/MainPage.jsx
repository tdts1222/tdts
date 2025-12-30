import { Button, Nav, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import AllView from "./AllView";
import TodoList from "./TodoList"
import TimerStopwatch from "./TimerStopwatch"
import "./css/MainPage.css"

function MainPage() {
    let [show, setShow] = useState(false);
    let [tab, setTab] = useState("tab_AllView");

    return (
        <>  
            <div className="offcanvas-open-btn">
                <Button variant="outline-secondary" onClick={() => {
                    setShow(true);
                }}><i className="bi bi-caret-down"></i></Button>
            </div>
            

            <Offcanvas show={show} onHide={() => setShow(false)} placement="top">
                <Offcanvas.Title>
                    <NavUI tab={tab} setTab={setTab}></NavUI>
                </Offcanvas.Title>
                <Offcanvas.Body></Offcanvas.Body>
            </Offcanvas>

            <TabContent tab={tab}></TabContent>

            {/* 테스트용 */}
            {/* <Button variant="danger" onClick={() => {
                localStorage.removeItem('visited');
                alert('localStorage 리셋');
            }}>테스트용 localStorage 리셋</Button> */}
        </>
    )
}

function NavUI(props) {
    return (
        <Nav variant="tabs"  defaultActiveKey={props.tab}>
            <Nav.Item>
                <Nav.Link onClick={()=>{ props.setTab("tab_TodoList") }} eventKey="tab_TodoList">TodoList</Nav.Link>
            </Nav.Item>
                <Nav.Item>
            <Nav.Link onClick={()=>{ props.setTab("tab_AllView") }} eventKey="tab_AllView">All</Nav.Link>
                </Nav.Item>
            <Nav.Item>
                <Nav.Link onClick={()=>{ props.setTab("tab_TimerStopwatch") }} eventKey="tab_TimerStopwatch">Timer & Stopwatch</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}

function TabContent(props) {
    if (props.tab === "tab_TodoList"){
        return <TodoList></TodoList>
    }
    if (props.tab === "tab_AllView"){
        return <AllView></AllView>
    }
    if (props.tab === "tab_TimerStopwatch"){
        return <TimerStopwatch></TimerStopwatch>
    }
}

export default MainPage;