import { GET_CHARACTERS } from "../actions";
const initialState = {
  characters: []
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CHARACTERS:
      return { characters: action.payload }
    default:
      return state;
  }
};
