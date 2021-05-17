import Nav from "./Nav";
import { Divider } from "semantic-ui-react";
import MenuGroupItem from "./MenuGroupItem";
import MenuItem from "./MenuItem";

const Builder = ({ items }) => (
  <Nav>
    <Nav.Menu>
      {items.map((item) => {
        const { subItems, ...itemProps } = item;
        const MenuItemComponent = subItems ? MenuGroupItem : MenuItem;
        return (
          <MenuItemComponent key={itemProps.text} {...itemProps}>
            {(subItems || []).map((subItem) => (
              <MenuItem key={subItem.text} {...subItem} isSubItem></MenuItem>
            ))}
          </MenuItemComponent>
        );
      })}
      <Divider />
      <Nav.ExpandButton />
    </Nav.Menu>
  </Nav>
);

export default Builder;
