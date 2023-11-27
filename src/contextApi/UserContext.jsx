// UserContext.jsx

import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState();
  const [user, setUser] = useState();
  const [isAuth, setIsAuth] = useState(false);

  const login = (token, user) => {
    setToken(token);
    setUser(user);
    setIsAuth(true);
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    setIsAuth(false);
  };

  return (
    <UserContext.Provider
      value={{
        token,
        setToken,
        user,
        setUser,
        isAuth,
        setIsAuth,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
