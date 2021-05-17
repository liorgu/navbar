import React, { useContext, useState } from "react";

const NavContext = React.createContext();

export const useNavContext = () => useContext(NavContext);

const NavProvider = ({ children }) => {
  const [expanded, setExpanded] = useState(false);
  const [opendItems, setOpenedItems] = useState({});

  const toggleExpanded = () => {
    setExpanded((expanded) => !expanded);
    setOpenedItems({});
  };

  const toggleMenuItemOpened = (item) => {
    setOpenedItems((openedItems) => ({
      ...openedItems,
      [item]: !openedItems[item],
    }));
  };

  const isMenuItemOpened = (item) => !!opendItems[item];

  return (
    <NavContext.Provider
      value={{
        expanded,
        toggleExpanded,
        isMenuItemOpened,
        toggleMenuItemOpened,
      }}
    >
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
