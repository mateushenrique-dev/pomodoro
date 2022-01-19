import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import { Colors, Fonts, Timers } from '../types';
import { ConfigContext  } from "./config";

interface IModalContext {
  fontSelected: Fonts;
  colorSelected: Colors;
  alterFont: (font: Fonts) => void;
  alterColor: (color: Colors) => void;
  alterTimers: (timer: Timers, value: number) => void;
  applyChanges: () => void;
  isModalOpen: boolean;
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

interface IModalContextProviderProps {
  children: ReactElement | ReactElement[] | Element;
}

export const ModalContextProvider = ({
  children,
}: IModalContextProviderProps) => {
  const {
    saveChanges,
    alterTimers,
    fontSelected,
    colorSelected,
    alterFont,
    alterColor,
  } = useContext(ConfigContext);

  const [isModalOpen, setModalOpen] = useState(false)

  function applyChanges() {
    saveChanges();
    setModalOpen(false)
  }

  return (
    <ModalContext.Provider
      value={{
        fontSelected,
        alterFont,
        colorSelected,
        alterColor,
        alterTimers,
        applyChanges,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
