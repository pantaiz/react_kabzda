import React from "react";

type AccordionBodyPropsType = {
    body: string
}

function AccordionBody(props: any) {
    console.log("AccordionBody")
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
}

function AccordionTitle(props: AccordionTitlePropstyp) {
    console.log("AccordionTitle HEAD")
    return <h3> {props.head}
        Menu</h3>
}

type AccordionPropsType = {
    title: string;
    collapsed: boolean;

}

function Accordion(props: AccordionPropsType) {
    if (props.collapsed) {
        return (
            <div>
                <AccordionTitle head={props.title}/>
                <AccordionBody body={props.title}/>
            </div>
        )
    }else {
        return (
            <div>
                <AccordionTitle head={props.title}/>
            </div>
        )
    }

}

export default Accordion;