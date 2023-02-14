import React, {useState} from "react";
import {AccordionTitle} from "./SelfAccordionTitle";
import {AccordionBody} from "./SelfAccordionBody";


type AccordionPropsType = {
    title: string;
}


const SelfControlAccordion = (props: AccordionPropsType) => {
    const [compresion, setCompresion] = useState(true)
    return (
        <>
            <AccordionTitle compresion={compresion} setCompresion={setCompresion} head={props.title}/>
            {compresion && <AccordionBody body={props.title}/>}
        </>
    )
}

export default SelfControlAccordion;