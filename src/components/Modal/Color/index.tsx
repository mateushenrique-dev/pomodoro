import { useContext } from "react";
import { ModalContext } from "../../../context/modal";
import { ColorItem, ColorsList, ColorTitle, ColorWrapper } from "./styles";

const Color = () => {
  const { colorSelected, alterColor } = useContext(ModalContext);

  return (
    <ColorWrapper>
      <ColorTitle>Color</ColorTitle>
      <ColorsList>
        <ColorItem
          colorFrom="#F87070"
          colorSelected={colorSelected}
          onClick={() => alterColor("#F87070")}
        ></ColorItem>
        <ColorItem
          colorFrom="#70F3F8"
          colorSelected={colorSelected}
          onClick={() => alterColor("#70F3F8")}
        ></ColorItem>
        <ColorItem
          colorFrom="#D881F8"
          colorSelected={colorSelected}
          onClick={() => alterColor("#D881F8")}
        ></ColorItem>
      </ColorsList>
    </ColorWrapper>
  );
};

export default Color;
