import React, { createContext, useState } from "react";

export const authContext = createContext();

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(false);
  const login = ({ email, password }) => {
    if (email === "example@gmail.com" && password === "1234") {
      setAuth(true);
    }
  };

  return (
    <authContext.Provider value={{ auth, login }}>
      {children}
    </authContext.Provider>
  );
}
