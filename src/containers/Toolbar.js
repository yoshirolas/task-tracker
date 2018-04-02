import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sortTaskList } from '../actions/appActions';
import TaskEditor from '../containers/TaskEditor';

import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import Menu, { MenuItem } from 'material-ui/Menu';
import Button from 'material-ui/Button';


const Container = styled.div`
  width: 100%;
  height: 70px;
  background-color: #3F51B5;
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
              0px 7px 10px 1px rgba(0, 0, 0, 0.14), 
              0px 2px 16px 1px rgba(0, 0, 0, 0.12);
`;

const Content = styled.div`
  width: 80%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: white;
  width: 100%;
  margin-left: 20px;
`;

class Toolbar extends Component {
  state = {
    anchorEl: null,
  };

  handleCloseMenu = filter => event => {
    this.setState({ anchorEl: null});
    this.props.dispatch(sortTaskList(filter));
  }

  handleOpenMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  render() {
    const { anchorEl } = this.state;
    return (
      <Container>
        <Content>
          <Title>
            Task Tracker
          </Title>
          <TaskEditor newTask />
          <IconButton 
            aria-owns={ anchorEl ? 'simple-menu' : null }
            aria-haspopup="true"
            onClick={ this.handleOpenMenu }
          >
            <Icon color="secondary">
              filter_list
            </Icon>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={ anchorEl }
            open={ Boolean(anchorEl) }
            onClose={ this.handleClose }
          >
            <MenuItem onClick={ this.handleCloseMenu('hight') }>
              Hight priority first
            </MenuItem>
            <MenuItem onClick={ this.handleCloseMenu('low') }>
              Low priority first
            </MenuItem>
            <MenuItem onClick={ this.handleCloseMenu('newest') }>
              Newest first
            </MenuItem>
            <MenuItem onClick={ this.handleCloseMenu('oldest') }>
              Oldest first
            </MenuItem>
          </Menu>
          <Button 
            color="default"
            onClick={ this.handleAsyncGetTask }
          >
            Login
          </Button>
        </Content>
      </Container>
    );
  }
}


export default connect()(Toolbar);