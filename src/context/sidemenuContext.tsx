import React, { createContext, useState } from 'react';

type ContextSideMenuObject = {
  show: boolean;

  setShow: (v: boolean) => void;
};

export const SideMenuContext = createContext<ContextSideMenuObject>({
  show: false,
  setShow: (valor) => {}
});

export const SideMenuContextProvider: React.FC = ({ children }) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <SideMenuContext.Provider value={{ show, setShow }}>
      {children}
    </SideMenuContext.Provider>
  );
};
