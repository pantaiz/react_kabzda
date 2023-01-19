import React from "react";

function AccordionBody(props:any) {
    debugger
    console.log("AccordionBody")
    return <><ul>
        {props.body}
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul></>
}
function AccordionTitle(props:any) {
    debugger
    console.log("AccordionTitle")
    return <h3> {props.body}
        Menu</h3>
}
function Accordion(props:any) {
    return (<div>
            <AccordionTitle head={props.title}/>
            <AccordionBody body={props.title}/>
        </div>
    )
}

export default Accordion;