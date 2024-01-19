import { createContext, useContext } from "react";

export const HelpContext = createContext({
    helps:[
        {id: 1,
        help: "Get Groccery",
        completed: false
        }
    ],
    addHelp: (help)=>{},
    updateHelp: (id, help) =>{},
    deleteHelp: (id)=>{},
    toggleComplete: (id)=>{}
})

export const useHelp = ()=>{
    return useContext(HelpContext)
}

export const HelpProvider = HelpContext.Provider