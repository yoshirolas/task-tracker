import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskItem from '../containers/TaskItem';

import styled from 'styled-components';


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

class TaskList extends Component {

  createTaskList = (item) => {
    return (
      <TaskItem
        key={ item.id }   
        title={ item.title }
        description={ item.description }
        date={ item.date.toLocaleDateString()}
        priority={ item.priority }
        complited={ item.complited }
        id={ item.id }
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
        <List>
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
