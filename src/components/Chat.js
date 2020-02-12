import React from "react";
import {authorize} from "../actions/authAction";
import {connect} from "react-redux";
import './Chat.sass';

export class Chat extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {chat_msg_global, chat_msg_local} = this.props;
    return (
      <div className="chatBox">
        {chat_msg_global.map((msg) => <div className="single" key={JSON.stringify(msg)}>
          <span className="owner"> {msg.owner}: </span>
          <span className="msg"> {msg.msg} </span>
        </div>)}
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
