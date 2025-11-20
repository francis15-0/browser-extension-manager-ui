import { useContext, type JSX } from "react";
import Switch from '@mui/material/Switch';
import type { dataProps } from "../types/data";
import '../styles/extension.css'
import { Theme } from "./userContext";


export default function Extention({data}:{data : dataProps}):JSX.Element | null{
   const context = useContext(Theme)
    if (!context) return null;

    const {setExtension} = context

    const handleCheck = () =>{
        setExtension((prev) => prev.map((item) =>
        item.name === data.name
          ? { ...item, isActive: !item.isActive } // toggle this one
          : item                                  // keep others the same
      )
    );
    }

    const handleDelete = ()=>{
        setExtension((prev)=> prev.filter((value)=> value.name != data.name))
    }
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
                        <div onClick={handleDelete} className="remove">
                            Remove
                        </div>

                        <Switch onChange={handleCheck} checked={data.isActive}  size="small"/>
                        

                    </div>
                </div>
                

            </div>
        </>
    )
}