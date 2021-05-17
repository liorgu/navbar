import MenuGroupItemProvider from "./MenuGroupItemProvider";
import PopupWrapper from "./PopupWrapper";

const MenuGroupItem = ({ text, icon, children }) => (
  <MenuGroupItemProvider submenus={children} icon={icon} text={text}>
    <PopupWrapper />
  </MenuGroupItemProvider>
);

export default MenuGroupItem;
