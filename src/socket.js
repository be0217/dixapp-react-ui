import socketIOClient from "socket.io-client";
import {environment} from "./index";
import {store} from "./index";
import {socketActions, chat_msg_global, chat_msg_local, message} from "./actions/actions";

import {choose, chosen_cards, create_room, join_room, leave_room, start_game} from "./socketActions";

let socket = null;

const createInstance = (endpoint, authToken) => {
  const socketIO = socketIOClient(environment.socketIO.endpoint, {
    query: {
      auth_token: authToken
    },
    response: false
  });

  for (let action of socketActions) {
    socketIO.on(action, data => {
      store.dispatch({
        type: action,
        payload: data
      });
    })
  }

  socketIO.on("error_msg", (msg) => console.warn(msg));
  return socketIO;
};

export const connect = (endpoint, authToken) => {
  if (!socket) {
    socket = createInstance(endpoint, authToken);
  } else {
    console.error("You are connected to socket right now");
  }
};

export const disconnect = () => {
  if (socket) {
    socket.disconnect();
    socket = undefined;
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const sendMessageGlobally = (msg) => {
  if (socket) {
    socket.emit(chat_msg_global, msg);
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const sendMessageLocally = (msg) => {
  if (socket) {
    socket.emit(chat_msg_local, msg);
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const createRoom = (title) => {
  if (socket) {
    let model = {title: title};
    socket.emit(create_room, model);
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const joinRoom = (id) => {
  if (socket) {
    socket.emit(join_room, id);
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const subscribeToServerMessage = (action) => {
  if (socket) {
    console.log("Registered");
    socket.on(message, action);
  } else {
    console.error("You are not connected to socket right now");
  }
};

export const unsubscribeFromServerMessage = (action) => {
  if (socket) {
    socket.off(message, action);
  } else {
    console.error("You are not connected to socket right now");
  }
};

