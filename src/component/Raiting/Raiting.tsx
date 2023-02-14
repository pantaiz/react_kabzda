import React, {useState} from "react";

type RaitingPropsType={

}

export function Raiting(props: RaitingPropsType) {
    const [select,setSelect]=useState(0)
        return (
            <div>
                <Star number={1} setSelect={setSelect}  selected={select>=1}/>
                <Star number={2} setSelect={setSelect} selected={select>=2}/>
                <Star number={3} setSelect={setSelect} selected={select>=3}/>
                <Star number={4} setSelect={setSelect} selected={select>=4}/>
                <Star number={5} setSelect={setSelect} selected={select>=5}/>
            </div>)



}
type StarPropsType={
    selected:boolean
    number:0|1|2|3|4|5
    setSelect:(number:number)=>void
}
function Star(props: StarPropsType) {
        return <span onDoubleClick={()=>{props.setSelect(0)}} onClick={()=>{props.setSelect(props.number)}} >{props.selected?<b>Star </b>:<>Star </>}</span>

}