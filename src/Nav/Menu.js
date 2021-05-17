import { Menu as SemanticMenu } from "semantic-ui-react";

const Menu = ({ children, ...rest }) => {
  return (
    <SemanticMenu compact vertical inverted {...rest}>
      {children}
    </SemanticMenu>
  );
};

export default Menu;
