import {v4 as uuid} from 'uuid';

import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
} from '../actions';

const initialState = [
  {
    text: 'My first TODO',
    id: uuid(),
  },
];

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: uuid(),
          text: action.text,
        },
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo => (todo.id === action.id ? {...todo, text: action.text} : todo));

    default:
      return state;
  }
}
