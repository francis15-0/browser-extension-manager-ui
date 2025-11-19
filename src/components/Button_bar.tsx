import type { JSX } from "react";
import '../styles/button_bar.css'
import { useContext } from "react";
import { Theme } from "./userContext";


export default function Button_bar():JSX.Element | null{
    const context = useContext(Theme)
    if (!context) return null;

    const {states, setStates} = context
    console.log(states)
    return(
        
        <div className="Extension-bar">

            <div>
                <p>Extensions List</p>
            </div>

            <div className="button-flex">
                <button className={states === "all"? "all": ""} onClick={()=>setStates("all")}>All</button>
                <button className={states === "active"? "all": ""} onClick={()=>setStates("active")}>Active</button>
                <button className={states === "inactive"? "all": ""} onClick={()=>setStates("inactive")}>Inactive</button>
                
            </div>
        </div>
        
    )

}