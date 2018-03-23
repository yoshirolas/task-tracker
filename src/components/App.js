import React, { Component } from 'react';
import TaskField from './TaskField';
import Toolbar from '../containers/Toolbar';

import CssBaseline from 'material-ui/CssBaseline';


class App extends Component {
  render() {
    return (
      <div>
        <CssBaseline />
        <Toolbar />
        <TaskField />
      </div>
    );
  }
}

export default App;