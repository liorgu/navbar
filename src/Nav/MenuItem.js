import { useNavContext } from "./NavProvider";
import Popup from "./Popup";
import { Menu, Icon } from "semantic-ui-react";

const MenuItem = ({ text, icon, onClick, href, isSubItem }) => {
  const { expanded } = useNavContext();
  return (
    <Popup
      disabled={expanded || isSubItem}
      content={text}
      trigger={
        <Menu.Item as="a" onClick={onClick} href={href}>
          {icon && (
            <Icon.Group size="large">
              <Icon name={icon} />
            </Icon.Group>
          )}
          {expanded || isSubItem ? text : null}
        </Menu.Item>
      }
    />
  );
};

export default MenuItem;
