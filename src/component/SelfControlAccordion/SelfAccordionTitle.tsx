import React from "react";
type AccordionTitlePropstype = {
    head: string
    setCompresion:(a:boolean)=>void
    compresion:boolean
}

export function AccordionTitle(props: AccordionTitlePropstype) {
    return <h3 onClick={()=>{props.setCompresion(!props.compresion)}}> {props.head}
        Menu</h3>
}