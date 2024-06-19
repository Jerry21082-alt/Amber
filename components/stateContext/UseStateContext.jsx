"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext();

export default function UseStateContext({ children }) {
  const [uiMode, setUiMode] = useState("ultra-mode");

  return (
    <Context.Provider
      value={{
        uiMode,
        setUiMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export const contextFunc = () => useContext(Context);
