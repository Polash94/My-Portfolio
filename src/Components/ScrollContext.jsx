import { createContext, useRef } from "react";

const ScrollContext = createContext()

export function ScrollProvider ({children}) {

const about = useRef(null);
const portfolio = useRef(null);
const experience = useRef(null);
const contact = useRef(null);


const ScrollToSection = (ref) => {
    
    window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth'
    })
}


    return <ScrollContext.Provider value={{about ,ScrollToSection, portfolio ,experience , contact}}>{children}</ScrollContext.Provider>
}

export default ScrollContext;