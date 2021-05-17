import React from "react";
import { Button, Icon } from "semantic-ui-react";
import { useNavContext } from "./NavProvider";
import Popup from "./Popup";
import "./ExpandButton.css";

const ExpandButton = () => {
  const { expanded, toggleExpanded } = useNavContext();
  return (
    <Popup
      trigger={
        <Button icon fluid onClick={toggleExpanded} className="expandButton">
          <Icon.Group size="large">
            <Icon inverted name={expanded ? "angle left" : "angle right"} />
          </Icon.Group>
        </Button>
      }
      content={expanded ? "Collapse" : "Expand"}
    />
  );
};

export default ExpandButton;
