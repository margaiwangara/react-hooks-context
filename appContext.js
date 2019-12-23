import React, { createContext } from "react";

export const AppContext = createContext("articles");

export const AppProvider = AppContext.Provider;
