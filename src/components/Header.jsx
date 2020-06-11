import React from 'react';
import PropTypes from 'prop-types';

import {
  AppBar, Toolbar, Typography, Paper,
} from '@material-ui/core';
import Input from './TodoTextInput';

const Header = ({onAdd}) => (
  <Paper
    elevation={0}
    style={{padding: 0, margin: 0, backgroundColor: '#fafafa'}}
  >
    <AppBar color="primary" position="static" style={{height: 64}}>
      <Toolbar style={{height: 64}}>
        <Typography color="inherit">TODO APP</Typography>
      </Toolbar>
    </AppBar>
    <Input
      newTodo
      onSave={onAdd}
      placeholder="Que quieres hacer hoy?"
    />
  </Paper>
);

Header.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default Header;
