import { useState } from "react";

function Pickcolor(){
const [col,colChange] = useState("")

const change=(event)=>{
    colChange(event.target.value)
}

    return(
        <>
        <h1>Colour Picker</h1>
        <div className="colour" style={{backgroundColor:col,height:"20em",border:"1px col",borderRadius:"12px"}}>
            <p>Selected color: {col}</p>
        </div>
        <h1>Select colour from here</h1>
        <input type="color" value={col} onChange={change}></input>
        </>
    );
}

export default Pickcolor;