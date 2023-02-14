import React from 'react';
import './App.css';
import Accordion from './component/Accordion/Accordion';
import {Raiting} from "./component/Raiting/Raiting";
import SelfControlAccordion from "./component/SelfControlAccordion/SelfControlAccordion";

function App() {
    return (
        <div>
            <input/>
            <input type="password" value="yo"/>
            <AppTitle title={"This is app component"}/>
            <AppTitle title={"This is my test"}/>
            <Raiting />
            <Accordion collapsed={true} title={"Accordionasdsadas Tittle test"}/>
            <Accordion collapsed={false} title={"Accordion Bodasdsdy asd"}/>
            <SelfControlAccordion title={"SelfControlAccordion Tittle test"}/>
        </div>
    );
}
type AppTitlePropsType={
    title:string
}
function AppTitle(props:AppTitlePropsType) {
    return <h1>{props.title}</h1>

}
export default App;
