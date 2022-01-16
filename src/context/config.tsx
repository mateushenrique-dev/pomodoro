import { createContext, ReactElement, useState } from "react";

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

interface IThemeConfig {}

interface IConfigContext {
  themeConfig: IThemeConfig;
  timers: ITimers;
  actualTime: number;
  alterActualTime: (timer: "pomodoro" | "shortBreak" | "longBreak") => void;
}

export function ConfigContextProvider({
  children,
}: IConfigContextProviderProps) {
  const [themeConfig, setThemeConfig] = useState<IThemeConfig>({});
  const [timers, setTimers] = useState<ITimers>({
    pomodoro: 60000,
    shortBreak: 120000,
    longBreak: 300000,
  });
  const [actualTime, setActualTime] = useState(timers.pomodoro);

  function alterActualTime(timer: "pomodoro" | "shortBreak" | "longBreak") {
    setActualTime(timers[timer]);
  }

  return (
    <ConfigContext.Provider
      value={{
        themeConfig,
        timers,
        actualTime,
        alterActualTime,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
