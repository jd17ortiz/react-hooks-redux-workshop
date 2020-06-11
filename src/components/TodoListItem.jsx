import React, {useState} from 'react';
import PropTypes from 'prop-types';

import ListItem from '@material-ui/core/ListItem';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import TodoTextInput from './TodoTextInput';

const TodoListItem = ({
  todo, onEdit, onDelete,
}) => {
  const [editing, setEditing] = useState(false);

  const handleSave = text => {
    if (text.length === 0) {
      onDelete(todo.id);
    } else {
      onEdit(todo.id, text);
    }
    setEditing(false);
  };

  let element;
  if (editing) {
    element = (
      <TodoTextInput
        text={todo.text}
        editing={editing}
        onSave={handleSave}
      />
    );
  } else {
    element = (
      <div>
        <label>{todo.text}</label>
        <IconButton onClick={() => onDelete(todo.id)}>
          <DeleteIcon />
        </IconButton>
      </div>
    );
  }
  return (
    <ListItem onDoubleClick={() => setEditing(true)} dense button>
      {element}
    </ListItem>
  );
};

TodoListItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TodoListItem;
