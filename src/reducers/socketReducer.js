import {} from '../actions/actions';
import {
  room_info,
  chat_msg_local,
  chat_msg_global,
  message,
  room_list,
  cards_hand,
  stage,
  question,
  answers_cards,
  chooser,
  scores,
  error_msg,
  disconnect
} from "../actions/actions";

const initialState = {
  chat_msg_global: [],
  chat_msg_local: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case room_info:
      return {
        ...state, room_info: action.payload
      };
      case chat_msg_local:
      return {
        ...state, chat_msg_local: [...state.chat_msg_local, action.payload]
      };
      case chat_msg_global:
      return {
        ...state, chat_msg_global: [...state.chat_msg_global, action.payload]
      };
    case message:
      return {
        ...state, message: action.payload
      };
    case room_list:
      return {
        ...state, room_list: action.payload
      };
    case cards_hand:
      return {
        ...state, cards_hand: action.payload
      };
    case stage:
      return {
        ...state, stage: action.payload
      };
    case question:
      return {
        ...state, question: action.payload
      };
    case answers_cards:
      return {
        ...state, answers_cards: action.payload
      };
    case chooser:
      return {
        ...state, chooser: action.payload
      };
    case scores:
      return {
        ...state, scores: action.payload
      };
    case error_msg:
      return {
        ...state, error_msg: action.payload
      };
    case disconnect:
      return {
        ...state, disconnect: action.payload
      };
    default:
      return state
  }
}
