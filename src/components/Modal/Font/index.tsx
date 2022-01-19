import { useContext } from "react";
import { ModalContext } from "../../../context/modal";
import { FontItem, FontsList, FontTitle, FontWrapper } from './styles';

const Font = () => {
  const { fontSelected, alterFont } = useContext(ModalContext);

  return (
    <FontWrapper>
      <FontTitle>Font</FontTitle>
      <FontsList>
        <FontItem
          font="Kumbh Sans"
          fontSelected={fontSelected}
          onClick={() => alterFont("Kumbh Sans")}
        >
          Aa
        </FontItem>
        <FontItem
          font="Roboto Slab"
          fontSelected={fontSelected}
          onClick={() => alterFont("Roboto Slab")}
        >
          Aa
        </FontItem>
        <FontItem
          font="Space Mono"
          fontSelected={fontSelected}
          onClick={() => alterFont("Space Mono")}
        >
          Aa
        </FontItem>
      </FontsList>
    </FontWrapper>
  );
};

export default Font;
