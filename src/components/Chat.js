import React from "react";
import {authorize} from "../actions/authAction";
import {connect} from "react-redux";
import './Chat.sass';
import {sendMessageGlobally} from "../socket";

export class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {typedMessage: "", chatType: "global"};
  }

  render() {
    const {chat_msg_global, chat_msg_local, room_info} = this.props;
    const {typedMessage, chatType} = this.state;
    const activeSwitch = !!room_info;

    const messagesContext = chatType === "global" ? chat_msg_global.map((msg) => <div className="single">
        <span className="owner"> {msg.owner}: </span>
        <span className="msg"> {msg.msg} </span>
    </div>) : <div> Not implemented yet </div>;

    return (
      <div className="chatBox">
          <div className="switcher">
              <div className={['switch', chatType === "global" ? "active" : ""].join(" ")}>
                  Global Chat
              </div>
              <div className={['switch', chatType === "local" ? "active" : ""].join(" ")}>
                  Local Chat
              </div>
          </div>

        <div className="messages">
          {messagesContext}
        </div>
        <form onSubmit={(e) => {
          e.preventDefault();
          sendMessageGlobally(typedMessage);
          this.setState({typedMessage: ""});
        }}>
          <input type="text" onChange={(e) => this.setState({typedMessage: e.target.value})} value={typedMessage}/>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   authorize: (email, password) => dispatch(authorize(email, password))
// });

const mapStateToProps = state => ({
  ...state.socketReducer
});

export default connect(mapStateToProps)(Chat);
