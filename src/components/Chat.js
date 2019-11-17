import React from "react";
import { withStyles } from "@material-ui/core/styles";

import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";

const styles = theme => ({
  chatLayout: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: "64px",
    height: "100%",
    overflow: "hidden"
  }
});

class Chat extends React.Component {
  render() {
    const { classes, messages } = this.props;

    return (
      <main className={classes.chatLayout}>
        <MessagesList messages={messages} />
        <MessageInput />
      </main>
    );
  }
}
export default withStyles(styles)(Chat);
