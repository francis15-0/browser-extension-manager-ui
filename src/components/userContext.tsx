import { createContext } from "react";

interface userContextType{
    isDark: boolean,
    setisDark: React.Dispatch<React.SetStateAction<boolean>>
}

export const Theme = createContext<userContextType | null>(null)