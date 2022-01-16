import {
  createContext,
  ReactElement,
  useEffect,
  useState,
} from "react";
import { Colors, Fonts, Timers } from "./modal";

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
  saveChanges: (timers: ITimers, themeConfig: IThemeConfig) => void;
}

export function ConfigContextProvider({
  children,
}: IConfigContextProviderProps) {
  const [themeConfig, setThemeConfig] = useState<IThemeConfig>(
    {} as IThemeConfig
  );
  const [timers, setTimers] = useState<ITimers>({
    pomodoro: 60000,
    shortBreak: 120000,
    longBreak: 300000,
  });
  const [actualTime, setActualTime] = useState<Timers>("pomodoro");

  function alterActualTime(timer: Timers) {
    setActualTime(timer);
  }

  function saveChanges(timersToChange: ITimers, themeConfig: IThemeConfig) {
    setTimers(timersToChange);
    setThemeConfig(themeConfig);
    localStorage.setItem(
      "configuration",
      JSON.stringify({ theme: { ...themeConfig }, timers: { ...timersToChange } })
    );
  }

  useEffect(() => {
    const localStorageConfig = localStorage.getItem("configuration")
    
    if (localStorageConfig) {
      const { theme, timers } = JSON.parse(localStorageConfig);
      setTimers(timers)
      setThemeConfig(theme)
    }
  }, [setTimers])

  return (
    <ConfigContext.Provider
      value={{
        themeConfig,
        timers,
        actualTime,
        alterActualTime,
        saveChanges,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
