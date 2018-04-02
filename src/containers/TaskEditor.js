import React from 'react';
import { connect } from 'react-redux';
import { asyncPostTask } from '../actions/appActions';

import styled from 'styled-components';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Dialog from 'material-ui/Dialog';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormControlLabel  } from 'material-ui/Form';
import Select from 'material-ui/Select';
import { MenuItem } from 'material-ui/Menu';
import Switch from 'material-ui/Switch';


const Form = styled.form`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Title = styled.h1`
  white-space: nowrap;
`;

const Note = styled.span`
  margin-top: 30px;
  font-size: 1rem;
`;

function Transition(props) {
  return <Slide direction="up" {...props} />;
}

class TaskEditor extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ 
      open: true,
      _id: this.props._id ? this.props._id : null,
      title: this.props.title ? this.props.title : '',
      description: this.props.description ? this.props.description : '',
      priority: this.props.priority ? this.props.priority : '',
      complited: this.props.complited ? this.props.complited : false,
      date: this.props.date ? this.props.date : (new Date()).toLocaleDateString()
    });
  };

  handleCloseEditor = () => {
    this.setState({ open: false });
  };

  handleSaveTask = () => {
    this.handleCloseEditor();
    this.props.dispatch(asyncPostTask(this.state))
  };


  handleChange = field => event => {
    if (field === 'title') {
      this.setState({
        title: event.target.value,
      });
    }
    if (field === 'description') {
      this.setState({
        description: event.target.value,
      });
    }
    if (field === 'priority') {
      this.setState({
        priority: event.target.value,
      });
    }
    if (field === 'complite') {
      this.setState({
        complited: !this.state.complited,
      });
    }
  };

  render() {
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <Icon color="secondary">
            { this.props.newTask ? `add` : `more_vert` }
          </Icon>
        </IconButton>
        <Dialog
          fullScreen
          open={ this.state.open }
          onClose={ this.handleCloseEditor }
          transition={ Transition }
        >
          <AppBar>
            <Toolbar>
              <Button 
                color="default" 
                onClick={ this.handleCloseEditor } 
                aria-label="Close"
              >
                close
              </Button>
              <Title>
                Task Editor
              </Title>
              <Button 
                disabled={ this.state.title ? false : true }
                color="default" 
                onClick={ this.handleSaveTask }
              >
                save
              </Button>
            </Toolbar>
          </AppBar>
          <Form>
            <Input
              value={ this.state.date }
              disabled
            />
            <TextField
              required
              label="Title"
              value={ this.state.title }
              onChange={ this.handleChange('title') }
              margin="normal"
              fullWidth
            />
            <TextField
              label="Description"
              multiline
              rowsMax="6"
              value={ this.state.description }
              onChange={ this.handleChange('description') }
              margin="normal"
              fullWidth
            />
            <FormControl>
              <InputLabel>
                Priority
              </InputLabel>
              <Select
                value={ this.state.priority }
                onChange={ this.handleChange('priority') }
                fullWidth
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={ 'hight' }>Hight</MenuItem>
                <MenuItem value={ 'low' }>Low</MenuItem>
              </Select>
              <FormControlLabel
                control={
                  <Switch
                    checked={ this.state.complited }
                    onChange={ this.handleChange('complite') }
                    color="primary"
                  />
                }
                label="Complited task"
              />
            </FormControl>
            <Note style={
              this.state.title 
              ? { color: 'gray' } 
              : { color: 'red' }
            }>
              Please, enter the required* fields
            </Note>
          </Form>
        </Dialog>
      </div>
    );
  }
}


export default connect()(TaskEditor);