import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            This is APP component
            <Raiting/>
        </div>
    );
}

function Raiting() {
    return (
        <div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
            <div>start</div>
        </div>
    )
}

function Accordion() {
    debugger
    return (<div>
            <h3>Menu</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default App;
