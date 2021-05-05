import { GET_MOMENTS, SELECT_MOMENT, CLEAR_SELECTION } from "./MomentsTypes";

export const initialState = {
  moments: [],
  selection: null,
};

export function momentsReducer(state, action) {
  switch (action.type) {
    case GET_MOMENTS:
      return { ...state, moments: action.payload };
    case SELECT_MOMENT:
      return { ...state, selection: action.payload };
    case CLEAR_SELECTION:
      return { ...state, selection: null };
    default:
      return state;
  }
}
