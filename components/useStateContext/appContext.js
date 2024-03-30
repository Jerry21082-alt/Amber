"use client";

import React, { createContext, useContext } from "react";

const Context = createContext();

const appContext = ({ children }) => {
  return <Context.Provider value={{
    projects
  }}>{children}</Context.Provider>;
};

export default appContext;
export const globalContext = () => useContext(Context);
