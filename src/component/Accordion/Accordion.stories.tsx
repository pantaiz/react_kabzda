import React, {useState} from "react";
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


const callback = action('accordion mode change event fired')

export default {
    title: 'Accordion',
    component: Accordion
}
export const MenuCollapsedMode = () => <Accordion title={'Menu'} collapsed={true} onClick={callback}/>

export const UsersUncollapsedMode = () => <Accordion title={'Menu'} collapsed={false} onClick={callback}/>

export const ModeChanging = () => {
  const [value,setValue]=useState<boolean>(true);
  return <Accordion title={"Users"} onClick={()=>{setValue(!value)}} collapsed={value}/>
}
