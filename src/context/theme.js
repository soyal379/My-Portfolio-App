import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'dark',
    toggleTheme: ()=>{}
})

export const ThemeContextProvider = ThemeContext.Provider

export default function useTheme(){
    return useContext(ThemeContext)
}