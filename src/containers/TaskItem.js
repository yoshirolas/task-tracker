import React, { Component } from 'react';
import { connect } from 'react-redux';
import TaskEditor from '../containers/TaskEditor';
import { deleteTask } from '../actions/appActions';

import styled from 'styled-components';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';


const Container = styled.li`
  cursor: move;
  position: relative;
  width: 100%;
  margin: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: #3F51B5; 
  border-radius: 2px;
  box-shadow: 0px 4px 5px -2px rgba(0, 0, 0, 0.2),
              0px 7px 10px 1px rgba(0, 0, 0, 0.14), 
              0px 2px 16px 1px rgba(0, 0, 0, 0.12);
`;

const EditBtnContent = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TextContent = styled.div`
  margin: 5px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Title = styled.h2`
  margin-top: 15px;
  white-space: nowrap;
  text-align: center;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis; 
`; 

const TextParagraph = styled.p`
  margin-bottom: 10px;
  width: 100%;
  max-height: 4.9rem;
  min-height: 1rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DelBtnContent = styled.div`
  margin: 5px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const TextDate = styled.span`
  color: white;
  position: absolute;
  top: 5px;
  right: 5px;
  font-size: 0.75rem;
  border-radius: 5px;
  text-transform: capitalize;
`;

const TextPriority = styled.span`
  position: absolute;
  top: 5px;
  left: 5px;
  font-size: 0.75rem;
  text-transform: capitalize;
`;

class TaskItem extends Component {

  handleDelTask = () => {
    this.props.dispatch(deleteTask(this.props.id));
  }

  render() {
    return (
      <Container>
        <EditBtnContent>
          <TaskEditor 
            id={ this.props.id }
            title={ this.props.title }
            description={ this.props.description }
            date={ this.props.date } 
            priority={ this.props.priority } 
            complited={ this.props.complited } 
          />
        </EditBtnContent>
        <TextContent>
          <Title>
            { this.props.title }
          </Title>
          <TextParagraph>
            { this.props.description }
          </TextParagraph>
        </TextContent>
        <DelBtnContent>
          <IconButton onClick={ this.handleDelTask }>
            <Icon color="secondary">
              delete
            </Icon>
          </IconButton>
        </DelBtnContent>
        <TextDate style={
          this.props.complited 
          ? { 'backgroundColor': 'green' } 
          : { color: 'black' }
        }>
          { this.props.complited ? `Complited` : this.props.date }
        </TextDate>
        <TextPriority>
          { 
            this.props.priority 
            ? `${ this.props.priority } priority` 
            : null
          }
        </TextPriority>
      </Container>
    );
  }
}


export default connect()(TaskItem);