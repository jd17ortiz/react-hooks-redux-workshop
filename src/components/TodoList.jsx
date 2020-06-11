import React from 'react';
import PropTypes from 'prop-types';

import {List} from '@material-ui/core';
import TodoListItem from './TodoListItem';

const TodoList = ({
  todos, onEdit, onDelete,
}) => (
  <List>
    {todos.map(todo => (
      <TodoListItem
        key={todo.id}
        todo={todo}
        onEdit={onEdit}
        onDelete={onDelete}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoList;
