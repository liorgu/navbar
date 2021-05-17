import { Menu, Icon } from "semantic-ui-react";
import { useNavContext } from "../NavProvider";
import { useMenuGroupItemContext } from "./MenuGroupItemProvider";
import "./ParentMenuItem.css";

const ParentMenuItem = () => {
  const { expanded, isMenuItemOpened, toggleMenuItemOpened } = useNavContext();
  const {
    text,
    icon,
    submenus,
    setHovered,
    hovered,
  } = useMenuGroupItemContext();
  const opened = isMenuItemOpened(text);

  return (
    <Menu.Item
      as="a"
      onClick={() => {
        toggleMenuItemOpened(text);
        setHovered(false);
      }}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <Icon.Group size="large">
        <Icon name={icon} />
      </Icon.Group>
      {expanded && text}
      {expanded && <Icon name={opened ? "chevron up" : "chevron down"} />}
      {expanded && opened && (
        <Menu.Menu compact vertical inverted>
          {submenus}
        </Menu.Menu>
      )}
      {
        <Icon.Group
          size="tiny"
          className={expanded || opened || !hovered ? "hideIcon" : undefined}
        >
          <Icon name="chevron right" />
        </Icon.Group>
      }
    </Menu.Item>
  );
};

export default ParentMenuItem;
