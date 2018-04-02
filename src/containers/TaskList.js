import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskItem from '../containers/TaskItem';
import { refreshTaskList } from '../actions/appActions';

import styled from 'styled-components';

import Sortable from 'sortablejs';
import arrayMove from 'array-move';


const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  margin-top: 10px;
  margin-left: 20px;
  font-size: 1.5rem;
  text-align: center;
  color: #E91E63;
`;

const List = styled.ul`
  width: 100%;
`;

let taskItemsArr;

class TaskList extends Component {

  componentDidMount() {
    taskItemsArr = this.props.tasks;
    const dispatch = this.props.dispatch;
    const draggableList = document.getElementById('draggableList');
    new Sortable(draggableList, {
      onSort: function (evt) {
        arrayMove.mut(taskItemsArr, evt.oldIndex, evt.newIndex);
        dispatch(refreshTaskList(taskItemsArr));
      },
    });
  }

  componentWillReceiveProps(nextProps) {
    taskItemsArr = nextProps.tasks;
  }

  createTaskList = (item) => {
    return (
      <TaskItem
        key={ item._id }   
        title={ item.title }
        description={ item.description }
        date={ (new Date(item.date)).toLocaleDateString() }
        priority={ item.priority }
        complited={ item.complited }
        _id={ item._id }
      />
    );
  }

  render() {
    const taskList = this.props.tasks.map(this.createTaskList);
    const numNotComlitedTasks = this.props.tasks
      .filter(item => !item.complited)
      .length;

    return (
      <Container>
        <Title>
          {`Tasks to do (${ numNotComlitedTasks })`}
        </Title>
        <List id="draggableList">
          { taskList }
        </List>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return {
    tasks: state.showTaskList,
  }
}

export default connect(mapStateToProps)(TaskList);
