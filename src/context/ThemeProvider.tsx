import React, { createContext, useContext, useReducer } from "react";

const ThemeContext = createContext<any>(null);




export const ThemeProvider = ({ children }: { children: any }) => {
  return <ThemeContext.Provider value={{}}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  return useContext(ThemeContext);
}
