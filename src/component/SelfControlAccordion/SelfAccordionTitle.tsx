import React from "react";
type AccordionTitlePropstype = {
    head: string
}

export function AccordionTitle(props: AccordionTitlePropstype) {
    return <h3> {props.head}
        Menu</h3>
}