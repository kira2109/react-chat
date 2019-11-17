import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";
import Avatar from "./Avatar";

const ChatsListItem = ({title}) => (
  <ListItem button>
    <Avatar colorFrom={title}>{title}</Avatar>
    <ListItemText primary={title} />
  </ListItem>
);

export default ChatsListItem;
