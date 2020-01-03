import socketIOClient from "socket.io-client";
import {environment} from "./index";

export default (endpoint, authToken) => {

    const socketIO = socketIOClient(environment.socketIO.endpoint, {
        query: {
            token: authToken
        }
    });


    socketIO.on('room_info', (room) => this.room.next(room));
    socketIO.on('chat_msg_local', (msg) => this.localMsg.next(msg));
    socketIO.on('chat_msg_global', (msg) => this.globalMsg.next(msg));
    socketIO.on('message', (msg) => this.serverMsg.next(msg));
    socketIO.on('room_list', (rooms) => this.roomList.next(rooms));
    socketIO.on('cards_hand', (hand) => this.hand.next(hand));
    socketIO.on('stage', (stage) => this.stage.next(stage));
    socketIO.on('question', (question) => this.question.next(question));
    socketIO.on('answers_cards', (answers) => this.answers.next(answers));
    socketIO.on('chooser', (chooser) => this.chooser.next(chooser));
    socketIO.on('scores', (scores) => this.scores.next(scores));
    socketIO.on('error_msg', (err) => this.error.next(err));
    socketIO.on('disconnect', (dc) => this.disconnect.next(dc));
    return socketIO;
};
