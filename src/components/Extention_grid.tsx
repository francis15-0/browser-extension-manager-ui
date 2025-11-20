import { useContext, type JSX } from "react";
import type { dataProps } from "../types/data";
import '../styles/extension_grid.css'
import Extention from "./Extension";
import { Theme } from "./userContext";

export default function Extension_grid({data} : {data : dataProps[]}):JSX.Element | null{
    const context = useContext(Theme)
    if (!context) return null;


    const {states} = context
    return(
        <>
            <div className="grid">
                {
                   states === "all" &&
                    data.map((value) => (
                        <Extention data={value} key={value.name} />
                     ))
                    
                }

                {
                    states === "active" && data.filter((data) => data.isActive).map((value) => (
                        <Extention data={value} key={value.name} />
                     ))
                }

                {
                    states === "inactive" && data.filter((data) => !data.isActive).map((value) => (
                        <Extention data={value} key={value.name} />
                     ))
                }


            </div>
        </>
    )
}