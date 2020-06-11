import React from 'react';
import PropTypes from 'prop-types';

import {Paper} from '@material-ui/core';
import TodoList from './TodoList';

const MainSection = ({
  todos, onEdit, onDelete,
}) => (
  <Paper style={{margin: 16}}>
    <TodoList
      todos={todos}
      onEdit={onEdit}
      onDelete={onDelete}
    />
  </Paper>
);

MainSection.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default MainSection;
