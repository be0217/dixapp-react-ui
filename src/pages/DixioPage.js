import React from "react";
import {connect as connectSocket, disconnect as disconnectSocket} from "../socket";
import {connect} from "react-redux";
import {authorize} from "../actions/authAction";
import {environment} from "../index";

class DixioPage extends React.Component {

  componentDidMount() {
    const { token } = this.props;
    connectSocket(environment.socketIO.endpoint, token);
  }

  componentWillUnmount() {
    console.log("Unmounting");
    disconnectSocket();
  }

  render() {
    return (
      <div className="page">
        <div className="background">

          <div className="card first">
            Lorem ipsum et dolores and stones
          </div>

          <div className="card second">
            Lorem ipsum and dolores and fires
          </div>

        </div>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  ...state.authReducer
});

export default connect(mapStateToProps)(DixioPage)


