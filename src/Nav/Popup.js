import React from "react";
import { Popup as SemanticPopup } from "semantic-ui-react";

const Popup = (props) => (
  <SemanticPopup position="right center" inverted {...props} />
);

export default Popup;
