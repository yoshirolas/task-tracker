import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskField from './TaskField';
import Toolbar from '../containers/Toolbar';
import { asyncGetTasks } from '../actions/appActions';

import CssBaseline from 'material-ui/CssBaseline';


class App extends Component {

  componentDidMount() {
    this.props.dispatch(asyncGetTasks)
  }

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

export default connect()(App);