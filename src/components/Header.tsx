import type { JSX } from "react";
import { useContext } from "react";
import { Theme } from "./userContext";
import logo from '../assets/images/logo.svg'
import moon from '../assets/images/icon-moon.svg'
import sun from '../assets/images/icon-sun.svg'
import '../App.css'
export default function Header():JSX.Element | null{

    const context = useContext(Theme)
    if (!context) return null;

    const {isDark, setisDark} = context

    const handleToggle = (): void=>{
        setisDark(!isDark)
    }

    return(
        <>
        <div className={isDark ? "header dark" : "header light"}>
            <div className="flex-left">
                <img src={logo} alt="" />
                
            </div>

            <div onClick={handleToggle} className="button">

                {
                    isDark ? <img src={sun} alt="" />: <img onClick={handleToggle} src={moon} alt="" />
                }
                
            </div>
        </div>

        </>
    )
}