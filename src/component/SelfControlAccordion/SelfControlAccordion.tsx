import React, {useState} from "react";
import {AccordionTitle} from "./SelfAccordionTitle";
import {AccordionBody} from "./SelfAccordionBody";


type AccordionPropsType = {
    title: string;
}


const SelfControlAccordion = (props: AccordionPropsType) => {
    const [compresion,setCompresion]=useState(true)
    return (
        <>
            <button onClick={()=>{setCompresion(!compresion)}}>Разкукожить</button>
            {compresion
            ?
            <>
                <AccordionTitle head={props.title}/><AccordionBody body={props.title}/>
            </>
            :
            <AccordionTitle head={props.title}/>}
        </>
    )
}

export default SelfControlAccordion;