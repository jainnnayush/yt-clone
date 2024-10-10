import { createContext, useContext, useState } from "react";

const utilsContext=createContext(null);

export const utilsContextProvider = ({children})=>{
    const [isSideBar,SetisSideBar]=useState(false);
    const [mobileShow,setMobileShow]=useState(false);
    return <utilsContext.Provider value={{isSideBar,SetisSideBar,mobileShow,setMobileShow}}>
        {children}
    </utilsContext.Provider>
};

export const useUtils = ()=>{
    const utilsContext=useContext(utilsContext);

    if(!utilsContext) return null;

    return utilsContext;
} 