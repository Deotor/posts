import {
  FETCH_POSTS,
  NEW_POST,
  GET_POST,
  NEW_COM,
  DEL_POST
} from "../actions/types";

const initialState = {
  items: [],
  item: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        items: action.payload
      };
    case NEW_POST:
      return {
        ...state,
        item: action.payload
      };
    case GET_POST:
      return {
        ...state,
        itemID: action.payload
      };
    case NEW_COM:
      return {
        ...state,
        com: action.payload
      };
    case DEL_POST:
      return {
        ...state,
        delRes: action.payload
      };
    default:
      return state;
  }
}
