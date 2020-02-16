import React from "react";
import {connect} from "react-redux";
import "./RoomTable.sass";
import { createRoom } from "../socket";
import {Dialog, DialogTitle, DialogContent, Button, DialogActions, TextField} from "@material-ui/core";


function InputDialog(props) {
  const {open, onClose} = props;
  const [name, setName] = React.useState("");

  const onApply = () => {
    createRoom(name);
    onClose();
  };

  return (
    <Dialog
      maxWidth="xs"
      aria-labelledby="room-select"
      open={open}
      onClose={onClose}
    >
      <DialogTitle id="confirmation-dialog-title">Enter the room name</DialogTitle>
      <DialogContent dividers>
        <div>
          <form onSubmit={(e) => {
            e.preventDefault();
            onApply();
          }}>
            <TextField onChange={(e) => setName(e.target.value)} value={name} label="Room name" />
          </form>
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onApply} color="primary">
          Ok
        </Button>
      </DialogActions>
    </Dialog>
  );
}

class RoomTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {dialogOpen: false};
  }

  render() {
    const {room_list, className} = this.props;
    const {dialogOpen} = this.state;

    const onClose = () => this.setState({dialogOpen: false});

    return <div className={["roomTable", className || ""].join(" ")}>
      <InputDialog open={dialogOpen} onClose={onClose} />
      <div className="toolbox">
        <Button variant="contained" className="toolbox-button" onClick={() => this.setState({dialogOpen: true})}> CREATE ROOM </Button>
      </div>
      <div className="table">
        {room_list?.map(room => <div>
          <h1>{room.title}</h1>
          <h3>{room.users}</h3>
        </div>)}
      </div>
    </div>
  }
}

const mapStateToProps = state => ({
  ...state.socketReducer
});

export default connect(mapStateToProps)(RoomTable)
