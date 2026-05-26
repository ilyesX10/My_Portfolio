import { ScrollContext } from "./ScrollContext";
import { useRef } from 'react'

export function ScrollProvider({ children }){
    const inputRef = useRef(null)
    const sectionRef = useRef(null)

   return(
    <ScrollContext.Provider value={{inputRef,sectionRef}}>
    {children}
    </ScrollContext.Provider>

   ); 
}