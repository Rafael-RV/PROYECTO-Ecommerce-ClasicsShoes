import { createContext, useState } from "react";

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState()

   
        const [mail, setMail] = useState()
    return(
        <UserContext.Provider value={{
            token,
            setToken,
            mail,
            setMail
        }}>
            {children}
        </UserContext.Provider>
    )
}