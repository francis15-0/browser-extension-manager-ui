import type { JSX } from "react";
import { useContext } from "react";
import { Theme } from "./userContext";
export default function Header():JSX.Element{

    const context = useContext(Theme)
    if (!context) return null;

    const {isDark, setisDark} = context

    const handleToggle = (): void=>{
        setisDark(!isDark)
    }

    console.log(isDark)
    return(
        <>
        <div>
            <div>
                Extention
            </div>

            <div className="button">

                {
                    isDark ? <img onClick={handleToggle} src="../assets/images/icon-sun.svg" alt="" />: <img onClick={handleToggle} src="../assets/images/icon-moon.svg" alt="" />
                }
                
            </div>
        </div>

        </>
    )
}