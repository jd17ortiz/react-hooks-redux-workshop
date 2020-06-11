import React, {useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {deleteTodo, editTodo} from '../actions';
import Main from '../components/MainSection';

const MainContainer = () => {
  const dispatch = useDispatch();
  const onEdit = useCallback(
    (id, text) => dispatch(editTodo(id, text)),
    [dispatch],
  );
  const onDelete = useCallback(
    id => dispatch(deleteTodo(id)),
    [dispatch],
  );
  const todos = useSelector(state => state.todos);
  return (
    <Main
      todos={todos}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  );
};

export default MainContainer;
