import React, { createContext, useContext, useState } from "react";


// THEME JS FILE



const Theme = createContext();
export const UseTheme=()=>{
    return useContext(Theme)
}

export const ThemeProvider = ({ children }) => {
   const [theme,setTheme]= useState("dark")
   
   const handleToggle=()=>{
    setTheme((prevState)=>{
        if(prevState=="dark"){
            return "light"
        }else{
            return "dark"
        }
    })

   }
  return <Theme.Provider value={{theme,handleToggle}}>
         {children}
    </Theme.Provider>;
};
