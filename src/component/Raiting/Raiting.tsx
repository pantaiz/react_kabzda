import React from "react";



export function Raiting() {
    return (
        <div>
            <Star selected={true}/>
            <Star selected={true}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>

        </div>
    )
}
function Star(props:any) {
    if (props.selected===true){
        return <span><b>Star </b></span>
    }else{
        return <span>Star </span>
    }

}