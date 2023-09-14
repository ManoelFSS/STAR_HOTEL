import React, {createContext, useContext, useState} from "react";

const ApiContext = createContext();

export const ApiProvider = ({children}) => {

    return (
        <ApiContext.Provider value={""}>
            {children}
        </ApiContext.Provider>
    )

}

export const useApiContext = ()=>{
    return useContext(ApiContext)
}