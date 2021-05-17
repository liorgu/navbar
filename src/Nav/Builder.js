import Nav from "./Nav";
import { Divider } from "semantic-ui-react";

const Builder = ({ items }) => (
  <Nav>
    <Nav.Menu>
      {items.map((item) => {
        const { subItems, ...itemProps } = item;
        const MenuItemComponent = subItems ? Nav.MenuGroupItem : Nav.MenuItem;
        return (
          <MenuItemComponent key={itemProps.text} {...itemProps}>
            {(subItems || []).map((subItem) => (
              <Nav.MenuItem
                key={subItem.text}
                {...subItem}
                isSubItem
              ></Nav.MenuItem>
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
