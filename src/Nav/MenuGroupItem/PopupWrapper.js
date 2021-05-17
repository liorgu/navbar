import React from "react";
import Popup from "../Popup";
import { useNavContext } from "../NavProvider";
import { useMenuGroupItemContext } from "./MenuGroupItemProvider";
import ParentMenuItem from "./ParentMenuItem";
import PopupContent from "./PopupContent";

const PopupWrapper = () => {
  const { isMenuItemOpened, expanded } = useNavContext();
  const { hovered, text } = useMenuGroupItemContext();
  const opened = isMenuItemOpened(text);

  return (
    <Popup
      disabled={expanded}
      content={<PopupContent />}
      open={hovered || opened}
      trigger={<ParentMenuItem />}
    />
  );
};

export default PopupWrapper;
