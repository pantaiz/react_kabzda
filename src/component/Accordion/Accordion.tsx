import React from "react";

type AccordionBodyPropsType = {
    body: string
}

function AccordionBody(props: AccordionBodyPropsType) {
    return <>
        <ul>
            {props.body}
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}

type AccordionTitlePropstyp = {
    head: string
    onClick: (collapsed: boolean) => void
    collapsed: boolean;
}
function AccordionTitle(props: AccordionTitlePropstyp) {

    return <h3 onClick={()=>props.onClick(!props.collapsed)}>
        {props.head}
        Menu</h3>
}

type AccordionPropsType = {
    title: string;
    collapsed: boolean;
    onClick: (collapsed: boolean) => void

}


function Accordion(props: AccordionPropsType) {
    return(
    <div>
        <AccordionTitle collapsed={props.collapsed}  onClick={props.onClick} head={props.title}/>
        {props.collapsed && <AccordionBody body={props.title}/>}
    </div>
)
}


export default Accordion;