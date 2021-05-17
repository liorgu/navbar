import React from "react";

import { useNavContext } from "../NavProvider";
import { useMenuGroupItemContext } from "./MenuGroupItemProvider";
import Menu from "../Menu";
import { MenuHeader } from "semantic-ui-react";

const PopupContent = () => {
  const { isMenuItemOpened } = useNavContext();
  const { text, submenus, hovered } = useMenuGroupItemContext();
  const opened = isMenuItemOpened(text);

  if (opened) {
    return (
      <Menu>
        <MenuHeader>{text}</MenuHeader>
        {submenus}
      </Menu>
    );
  }

  if (hovered) return text;
  return null;
};

export default PopupContent;
