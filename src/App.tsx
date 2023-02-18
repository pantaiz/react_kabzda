import React, {useState} from 'react';
import './App.css';
import Accordion from './component/Accordion/Accordion';
import {Raiting,RatingValueType} from "./component/Raiting/Raiting";
import SelfControlAccordion from "./component/SelfControlAccordion/SelfControlAccordion";

function App() {
    const[ratingValue,setRatingValue]=useState<RatingValueType>(0)
    const[collapsed,setCollapsed]=useState<boolean>(false)
    return (
        <div>
            <input/>
            <input type="password" value="yo"/>
            <AppTitle title={"This is app component"}/>
            <AppTitle title={"This is my test"}/>
            <Raiting value={ratingValue} onClick={setRatingValue}/>
            <Accordion collapsed={collapsed} onClick={setCollapsed} title={"Accordionasdsadas Tittle test"}/>
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
