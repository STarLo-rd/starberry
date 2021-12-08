import { properties } from "../components/properties";

export const initialState = {
  details: properties,
  user: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
