import { useCallback } from "react";

export default function useScrollTo(){
    return useCallback((id)=>{
        const element = document.getElementById(id)
        if(!element)return

        element.scrollIntoView({
            behavior:"smooth",
            block:"start",
        })
    },[])
}