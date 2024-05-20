"use client";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import React, { createContext, useContext, useState } from "react";

const Context = createContext();

const AppContext = ({ children }) => {
  const [uiMode, setUiMode] = useLocalStorage("uiColorMode", "night-mode");
  const [name, setName] = useState('Jerry')

  return (
    <Context.Provider
      value={{
        uiMode,
        setUiMode,
        name
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default AppContext;
export const globalContext = () => useContext(Context);
