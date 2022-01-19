import { createContext, ReactElement, useEffect, useState } from "react";
import { Colors, Fonts, Timers } from '../types';

export const ConfigContext = createContext<IConfigContext>(
  {} as IConfigContext
);

interface IConfigContextProviderProps {
  children: ReactElement | ReactElement[] | Element;
}

export interface ITimers {
  pomodoro: number;
  shortBreak: number;
  longBreak: number;
}

interface IThemeConfig {
  color: Colors;
  font: Fonts;
}

interface IConfigContext {
  themeConfig: IThemeConfig;
  timers: ITimers;
  actualTime: string;
  alterActualTime: (timer: Timers) => void;
  saveChanges: () => void;
  alterTimers: (timers: Timers, value: number) => void;
  fontSelected: Fonts;
  colorSelected: Colors;
  alterColor: (color: Colors) => void;
  alterFont: (font: Fonts) => void;
}

export function ConfigContextProvider({
  children,
}: IConfigContextProviderProps) {
  const [themeConfig, setThemeConfig] = useState<IThemeConfig>({
    color: "#F87070",
    font: "Kumbh Sans",
  } as IThemeConfig);
  const [timers, setTimers] = useState<ITimers>({
    pomodoro: (25 * 60000),
    shortBreak: (5 * 60000),
    longBreak: (15 * 60000),
  });
  const [actualTime, setActualTime] = useState<Timers>("pomodoro");
  const [fontSelected, setFontSelect] = useState<Fonts>(themeConfig.font);
  const [colorSelected, setColorSelect] = useState<Colors>(themeConfig.color);

  function alterActualTime(timer: Timers) {
    setActualTime(timer);
  }

  function saveChanges() {
    setThemeConfig({ color: colorSelected, font: fontSelected })
    localStorage.setItem(
      "configuration",
      JSON.stringify({
        theme: { color: colorSelected, font: fontSelected },
        timers: { ...timers },
      })
    );
  }

  function alterTimers(timer: Timers, value: number) {
    setTimers((timers) => {
      return { ...timers, [timer]: value } as ITimers;
    });
  }

  function alterFont(font: Fonts) {
    setFontSelect(font);
  }

  function alterColor(color: Colors) {
    setColorSelect(color);
  }

  useEffect(() => {
    const localStorageConfig = localStorage.getItem("configuration");

    if (localStorageConfig) {
      const { theme, timers } = JSON.parse(localStorageConfig);
      setTimers(timers);
      setThemeConfig(theme);
    }
  }, [setTimers]);

  return (
    <ConfigContext.Provider
      value={{
        themeConfig,
        timers,
        actualTime,
        alterActualTime,
        saveChanges,
        alterTimers,
        alterFont,
        alterColor,
        colorSelected,
        fontSelected,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
