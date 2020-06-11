export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = text => ({type: ADD_TODO, text});
export const deleteTodo = id => ({type: DELETE_TODO, id});
export const editTodo = (id, text) => ({type: EDIT_TODO, id, text});
