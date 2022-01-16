import { createContext, Dispatch, ReactElement, SetStateAction, useContext, useState } from "react";
import { ConfigContext, ITimers } from "./config";

export type Fonts = "Kumbh Sans" | "Roboto Slab" | "Space Mono";
export type Colors = "#F87070" | "#70F3F8" | "#D881F8";
export type Timers = "pomodoro" | "shortBreak" | "longBreak";

interface IModalContext {
  fontSelected: Fonts;
  colorSelected: Colors;
  alterFont: (font: Fonts) => void;
  alterColor: (color: Colors) => void;
  alterTimers: (timer: Timers, value: number) => void;
  applyChanges: () => void;
}

export const ModalContext = createContext<IModalContext>({} as IModalContext);

interface IModalContextProviderProps {
  children: ReactElement | ReactElement[] | Element;
  setModalOpen: Dispatch<SetStateAction<boolean>>
}

export const ModalContextProvider = ({
  children,
  setModalOpen
}: IModalContextProviderProps) => {
  const [fontSelected, setFontSelect] = useState<Fonts>("Kumbh Sans");
  const [colorSelected, setColorSelect] = useState<Colors>("#F87070");
  const [timer, setTimers] = useState<ITimers>({
      pomodoro: 0,
      shortBreak: 0,
      longBreak: 0,
    } as ITimers);
  const { saveChanges } = useContext(ConfigContext);

  function alterFont(font: Fonts) {
    setFontSelect(font);
  }

  function alterColor(color: Colors) {
    setColorSelect(color);
  }

  function applyChanges() {
    saveChanges(timer, { color: colorSelected, font: fontSelected });
    setModalOpen(false)
  }

  function alterTimers(
    timer: Timers,
    value: number
  ) {
    setTimers((timers) => {
      return {...timers, [timer]: value} as ITimers;
    });
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
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
