import socketIOClient from "socket.io-client";
import {environment} from "./index";
import {store} from "./index";
import {socketActions, chat_msg_global} from "./actions/actions";

export var socket = null;

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


