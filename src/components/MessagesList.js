import React from "react";
import { withStyles } from "@material-ui/core/styles";

import MessageItem from "./MessageItem";

const styles = theme => ({
  messagesWrapper: {
    overflowX: "scroll",
    height: "100%",
    width: "100%",
    paddingTop: theme.spacing(3),
    paddingBottom: "120px"
  }
});

class MessagesList extends React.Component {
  constructor(props) {
    super(props);
    this.messagesWrapper = React.createRef();
  }

  componentDidMount() {
    this.scrollDownHistory();
  }

  componentDidUpdate() {
    this.scrollDownHistory();
  }

  scrollDownHistory() {
    const messagesWrapper = this.messagesWrapper.current;

    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  render() {
    const { classes, messages } = this.props;

    return (
      <div className={classes.messagesWrapper} ref={this.messagesWrapper}>
        {messages &&
          messages.map((message, index) => (
            <MessageItem key={index} {...message} />
          ))}
      </div>
    );
  }
}

export default withStyles(styles)(MessagesList);
