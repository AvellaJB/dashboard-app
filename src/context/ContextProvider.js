import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {
  chat: false,
  card: false,
  userProfile: false,
  notification: false,
};
/* Le children permet de render l'élément qui va être wrapper par notre contexte. */

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
