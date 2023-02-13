import React, {useState} from "react";



type AccordionTitlePropstype = {
    head: string
}
type AccordionBodyPropstype = {
    body: string
}
type AccordionPropsType = {
    title: string;
    collapsed: boolean;

}

let[aa,bb]=useState<boolean>(true)
//let [compression,SetCompression]=useState(true)

function AccordionBody(props: AccordionBodyPropstype) {
    return <><button>XXX</button>
        {}
        <ul>
            {props.body}
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}
function AccordionTitle(props: AccordionTitlePropstype) {
    return <h3> {props.head}
        Menu</h3>
}


function SelfControlAccordion(props: AccordionPropsType) {
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

export default SelfControlAccordion;