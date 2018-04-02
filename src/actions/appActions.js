import axios from 'axios';
const port = process.env.PORT || 3001;
const apiPrefix = `http://localhost:${ port }`;


export const asyncGetTasks = (dispatch) => {
  axios.get(`${ apiPrefix }/tasks`)
    .then(res => {
      const tasks = res.data;
      return dispatch({
        type: 'GET_TASKS',
        payload: tasks
      })
    })
    .catch(err => console.log(err))
}

export const asyncDeleteTask = (_id) => (dispatch) => {
  axios.post(`${ apiPrefix }/delete`, {'_id': _id})
    .then(res => {
      const task = res.data;
      return dispatch({
        type: 'DELETE_TASK',
        payload: task
      });
    })
    .catch(err => console.log(err))
}

export const asyncPostTask = (data) => (dispatch) => {
  
  if (data._id) {
    axios.put(`${ apiPrefix }/update`, data)
      .then(res => {
        const task = res.data;
        return dispatch({
          type: 'UPDATE_TASK',
          payload: task
        });
      })
      .catch(err => console.log(err))

  } else {
    axios.post(`${ apiPrefix }/add`, data)
      .then(res => {
        const task = res.data;
        return dispatch({
          type: 'ADD_TASK',
          payload: task
        });
      })
      .catch(err => console.log(err))
  }
}

export const sortTaskList = (filter) => ({
  type: 'SORT_TASK_LIST',
  payload: filter
});

export const refreshTaskList = (arr) => ({
  type: 'REFRESH_TASK_LIST',
  payload: arr,
});

