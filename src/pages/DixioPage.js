import React from "react";
import {connect as connectSocket, disconnect as disconnectSocket, subscribeToServerMessage, unsubscribeFromServerMessage} from "../socket";
import {connect} from "react-redux";
import {authorize} from "../actions/authAction";
import {environment} from "../index";
import './DixioPage.sass';
import Chat from '../components/Chat';
import RoomTable from "../components/RoomTable";
import {Snackbar} from "@material-ui/core";
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class DixioPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {openSnack: false};
  }

  componentDidMount() {
    const { token } = this.props;
    connectSocket(environment.socketIO.endpoint, token);
    subscribeToServerMessage((msg) => {
      this.setState({openSnack: true});
    });
  }

  componentWillUnmount() {
    unsubscribeFromServerMessage((msg) => this.setState({openSnack: true}));
    disconnectSocket();
  }

  render() {
    const snackCloser = () => this.setState({openSnack: false});
    const {message} = this.props;
    const {openSnack} = this.state;

    return (
      <div className="page">
        <div className="layout-container">
          <RoomTable className="dixio-rooms"/>
          <Chat className="dixio-chat"/>
        </div>
        <Snackbar open={openSnack} autoHideDuration={3000} onClose={snackCloser}>
          <Alert severity="info">{message?.msg}</Alert>
        </Snackbar>
      </div>
    )
  }
}


const mapStateToProps = state => ({
  ...state.authReducer, ...state.socketReducer
});

export default connect(mapStateToProps)(DixioPage)


