import { createContext, ReactNode, useReducer } from "react";
import { useAppContext } from "./useAppContext";
import { appReducer } from "./appReducer";
import { AppContextType } from "./types";


export const AppContext = createContext<AppContextType>({
    userDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        country: '',
        jobTitle: '',
        city: ''
    },
    dispatch: ()=>{return}
})

export function AppProvider({children}: {children: ReactNode}) {
    
    const value = useAppContext()

    const [mainstate, dispatch] = useReducer(appReducer, value)
    
    return (
        <AppContext.Provider value={{...mainstate, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}