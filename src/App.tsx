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
            <Raiting value={1}/>
            <Raiting value={2}/>
            <Raiting value={3}/>
            <Raiting value={4}/>
            <Raiting value={5}/>
            <Raiting value={0}/>
            <Accordion collapsed={true} title={"Accordionasdsadas Tittle test"}/>
            <Accordion collapsed={false} title={"Accordion Bodasdsdy asd"}/>
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
