import React from 'react';
import './App.css';
import Accordion from './component/Accordion/Accordion';
import {Raiting} from "./component/Raiting/Raiting";

function App() {
    return (
        <div>
            <input/>
            <input type="password" value="yo"/>
            <AppTitle title={"This is app component"}/>
            <AppTitle title={"This is my test"}/>
            <Raiting/>
            <Accordion title={"Accordionasdsadas Tittle test"}/>
            <Accordion title={"Accordion Bodasdsdy asd"}/>
        </div>
    );
}
function AppTitle(props:any) {
    return <h1>{props.title}</h1>

}
export default App;
