import React from "react";
import {authorize} from "../actions/authAction";
import {connect} from "react-redux";
import './Chat.sass';
import {sendMessageGlobally, sendMessageLocally} from "../socket";
import {room_info} from "../actions/actions";

export class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {typedMessage: "", chatType: "global"};
  }

  switchType(type) {
    if(this.props.room_info || type === "global") {
      this.setState({chatType: type});
    } else {
      console.log("Denied change")
    }
  }

  render() {
    const {chat_msg_global, chat_msg_local, className} = this.props;
    const {typedMessage, chatType} = this.state;
    const context = chatType === "global" ? chat_msg_global : chat_msg_local;

    const messagesContext = context.map((msg) => <div className="single">
        <span className="owner"> {msg.owner}: </span>
        <span className="msg"> {msg.msg} </span>
    </div>);

    return (
      <div className={["chatBox", className || ""].join(" ")}>
          <div className="switcher">
              <div className={['switch', chatType === "global" ? "active" : ""].join(" ")} onClick={() => this.switchType("global")}>
                  Global Chat
              </div>
              <div className={['switch', chatType === "local" ? "active" : ""].join(" ")}  onClick={() => this.switchType("local")}>
                  Local Chat
              </div>
          </div>

        <div className="messages">
          {messagesContext}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          if(chatType === "global") {
            sendMessageGlobally(typedMessage);
          } else {
            sendMessageLocally(typedMessage);
          }
          this.setState({typedMessage: ""});
        }}>
          <input type="text" onChange={(e) => this.setState({typedMessage: e.target.value})} value={typedMessage}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.socketReducer
});

export default connect(mapStateToProps)(Chat);
