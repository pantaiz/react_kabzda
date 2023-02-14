import React from "react";
type AccordionBodyPropstype = {
    body: string
}
export function AccordionBody(props: AccordionBodyPropstype) {

    return <>
        {}
        <ul>
            {props.body}
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    </>
}