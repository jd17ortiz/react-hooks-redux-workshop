import React, {useState} from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';

const Input = props => {
  const {
    onSave, newTodo, placeholder, text: textFromProps,
  } = props;
  const [text, setText] = useState(textFromProps);

  const handleSubmit = e => {
    const value = e.target.value.trim();
    if (e.which === 13 && value.length) {
      onSave(value);
      if (newTodo) {
        setText('');
      }
    }
  };

  const handleChange = e => {
    setText(e.target.value);
  };

  const handleBlur = e => {
    if (!newTodo && e.target.value) {
      onSave(e.target.value);
    }
  };

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder={placeholder}
      margin="normal"
      onKeyDown={handleSubmit}
      onBlur={handleBlur}
      onChange={handleChange}
      autoFocus
      value={text}
    />
  );
};

Input.propTypes = {
  onSave: PropTypes.func.isRequired,
  text: PropTypes.string,
  placeholder: PropTypes.string,
  newTodo: PropTypes.bool,
};

Input.defaultProps = {
  newTodo: false,
  placeholder: '',
  text: '',
};

export default Input;
