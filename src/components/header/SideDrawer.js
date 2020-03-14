import React from "react";

import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SideDrawer = props => {
  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List component="nav">
        <ListItem button onClick={() => console.log("event")}>
          <ListItemText primary="Events Starts In" />
        </ListItem>
        <ListItem button onClick={() => console.log("Venue Info")}>
          <ListItemText primary="Venue Info" />
        </ListItem>
        <ListItem button onClick={() => console.log("Highlights")}>
          <ListItemText primary="Highlights" />
        </ListItem>
        <ListItem button onClick={() => console.log("Pricing")}>
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button onClick={() => console.log("Location")}>
          <ListItemText primary="Location" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideDrawer;
