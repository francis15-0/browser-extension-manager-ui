import type { JSX } from "react";
import { useContext } from "react";
import { Theme } from "./userContext";
import '../App.css'
export default function Header():JSX.Element | null{

    const context = useContext(Theme)
    if (!context) return null;

    const {isDark, setisDark} = context

    const handleToggle = (): void=>{
        setisDark(!isDark)
    }

    console.log(isDark)
    return(
        <>
        <div className={isDark ? "header dark" : "header light"}>
            <div className="flex-left">
                <img src="../assets/images/logo.svg" alt="" />
                
            </div>

            <div onClick={handleToggle} className="button">

                {
                    isDark ? <img src="../assets/images/icon-sun.svg" alt="" />: <img onClick={handleToggle} src="../assets/images/icon-moon.svg" alt="" />
                }
                
            </div>
        </div>

        </>
    )
}