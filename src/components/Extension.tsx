import type { JSX } from "react";
import Switch from '@mui/material/Switch';
import type { dataProps } from "../types/data";
import '../styles/extension.css'

export default function Extention({data}:{data : dataProps}):JSX.Element | null{
    return(
        <>
            <div className="extension">
                <div className="extension-flex">
                        <div className="top-flex">
                        <img className="extension-img" src={data.logo} alt="extension-img" />

                        <div>
                            <p className="name">{data.name}</p>
                            <p className="description">{data.description}.</p>
                        </div>

                    </div>

                    <div className="bottom-flex">
                        <div className="remove">
                            Remove
                        </div>

                        <Switch checked={data.isActive}  size="small"/>
                        

                    </div>
                </div>
                

            </div>
        </>
    )
}