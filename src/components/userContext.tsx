import { createContext } from "react";

interface userContextType{
    isDark: boolean,
    states: "active" | "all" | "inactive"
    setStates: React.Dispatch<React.SetStateAction<"active" | "all" | "inactive">>
    setisDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const Theme = createContext<userContextType | null>(null)