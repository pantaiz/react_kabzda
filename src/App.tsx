import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Raiting/>
            <Accordion/>
        </div>
    );
}
function Star() {
    return <div>Start</div>
}
function AppTitle() {
    return <>This is App component</>

}
function Raiting() {
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    )
}
function AccordionBody() {
    debugger
    console.log("AccordionBody")
    return <><ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul></>
}
function AccordionTitle() {
    debugger
    console.log("AccordionTitle")
    return <h3>Menu</h3>
}
function Accordion() {
    return (<div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}

export default App;
