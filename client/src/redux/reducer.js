import initState from "./initState";
import {
  SAVE_JOKES_FAVORITE,
  DELETE_JOKES_FAVORITE,
  DELETE_ALL,
} from "./types";

const reducer = (state = initState(), action) => {
  switch (action.type) {
    case SAVE_JOKES_FAVORITE:
      return {
        ...state,
        jokes_favorite:
          state.jokes_favorite.length < 10
            ? [
                ...state.jokes_favorite,
                { text: action.payload.jokes, id: action.payload.jokeId },
              ]
            : [
                ...state.jokes_favorite.slice(1),
                { text: action.payload.jokes, id: action.payload.jokeId },
              ],
      };

    case DELETE_JOKES_FAVORITE:
      return {
        ...state,
        jokes_favorite: state.jokes_favorite.filter(
          (joke) => joke.id !== action.payload
        ),
      };

    case DELETE_ALL:
      return {
        ...state,
        jokes_favorite: (state.jokes_favorite = []),
      };

    default:
      return state;
  }
};

export default reducer;
