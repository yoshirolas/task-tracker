import React, { Component } from 'react';
import TaskList from '../containers/TaskList';

import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
`;

const Content = styled.div`
  width: 80%;
`;

class TaskField extends Component {
  render() {
    return (
      <Container>
        <Content>
          <TaskList />
        </Content>
      </Container>
    );
  }
}

export default TaskField;
