import { Add_Todo, Remove_Todo, Clear_Todo } from "../Action";

const initialState = {
  list: [],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case Add_Todo:
      const { data, id } = action.payload;
      return {
        ...state,
        list: [...state.list, { data, id }],
      };

    case Remove_Todo:
      let newList = state.list.filter((newItem) => newItem.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case Clear_Todo:
      return {
        ...state,
        list: [],
      };

    default:
      return state;
  }
};
