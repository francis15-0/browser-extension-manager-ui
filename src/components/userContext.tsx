import { createContext } from "react";
import type { dataProps } from "../types/data";
interface userContextType{
    isDark: boolean,
    states: "active" | "all" | "inactive"
    setStates: React.Dispatch<React.SetStateAction<"active" | "all" | "inactive">>
    setisDark: React.Dispatch<React.SetStateAction<boolean>>
    setExtension: React.Dispatch<React.SetStateAction<dataProps[]>>
}

export const Theme = createContext<userContextType | null>(null)