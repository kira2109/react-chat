import React from "react";
import MUIAvatar from "@material-ui/core/Avatar";

import createColor from "../utils/colors";
import titleInitials from '../utils/title-initials';

const Avatar = ({ colorFrom, children, ...rest }) => (
  <MUIAvatar
    style={{ backgroundColor: createColor(colorFrom) }}
    {...rest}
  >
    {titleInitials(children)}
  </MUIAvatar>
);

export default Avatar;
