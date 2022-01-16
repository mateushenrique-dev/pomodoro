import { useContext } from "react";
import { ConfigContext } from "../../context/config";
import styles from "./menu.module.scss";
import MenuItem from "./MenuItem";

const Menu = () => {
  const { alterActualTime, actualTime, themeConfig } =
    useContext(ConfigContext);

  return (
    <nav className={styles.menu}>
      <ul className={styles.menuList}>
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
      </ul>
    </nav>
  );
};

export default Menu;
