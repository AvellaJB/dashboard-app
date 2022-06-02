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
  const [isClicked, setisClicked] = useState(initialState);
  const [screenSize, setScreenSize] = useState(undefined);

  /* OUF ! Ici on a notre handle click qui est géré dans le context provider. 
Pour pouvoir agit sur l'initial state on décompose l'object et ou passe à true uniquement le state
concerné par le click !  */

  const handleClick = (clicked) => {
    setisClicked({ ...initialState, [clicked]: true });
  };

  return (
    <StateContext.Provider
      value={{
        activeMenu,
        setActiveMenu,
        isClicked,
        setisClicked,
        handleClick,
        screenSize,
        setScreenSize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
