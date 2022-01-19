import { useContext } from "react";
import { ConfigContext } from "../../context/config";
import MenuItem from "./MenuItem";
import { MenuList, MenuWrapper } from './styles';

const Menu = () => {
  const { alterActualTime, actualTime, themeConfig } =
    useContext(ConfigContext);

  return (
    <MenuWrapper>
      <MenuList>
        <MenuItem
          themeConfig={themeConfig}
          actualTime={actualTime}
          type="pomodoro"
          onClick={() => alterActualTime("pomodoro")}
        >
          Pomodoro
        </MenuItem>
        <MenuItem
          themeConfig={themeConfig}
          actualTime={actualTime}
          type="shortBreak"
          onClick={() => alterActualTime("shortBreak")}
        >
          Short Break
        </MenuItem>
        <MenuItem
          themeConfig={themeConfig}
          actualTime={actualTime}
          type="longBreak"
          onClick={() => alterActualTime("longBreak")}
        >
          Long Break
        </MenuItem>
      </MenuList>
    </MenuWrapper>
  );
};

export default Menu;
