import React, { useContext, useState } from "react";

const MenuGroupItemContext = React.createContext();
export const useMenuGroupItemContext = () => useContext(MenuGroupItemContext);

const MenuGroupItemProvider = ({ children, submenus, text, icon }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <MenuGroupItemContext.Provider
      value={{
        hovered,
        setHovered,
        submenus,
        text,
        icon,
      }}
    >
      {children}
    </MenuGroupItemContext.Provider>
  );
};

export default MenuGroupItemProvider;
