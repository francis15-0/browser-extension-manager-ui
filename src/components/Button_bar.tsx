import type { JSX } from "react";
import '../styles/button_bar.css'

export default function Button_bar():JSX.Element{
    return(
        
        <div className="Extension-bar">

            <div>
                Extensions List
            </div>

            <div className="button-flex">
                <button>All</button>
                <button>Active</button>
                <button>Inactive</button>
            </div>
        </div>
        
    )

}