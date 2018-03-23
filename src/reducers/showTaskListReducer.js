import shortid from 'shortid';
import initialState from '../constants/initialState';


function showTaskList (state = initialState, action) {
  switch (action.type) {

    case 'DEL_TASK': { 
      const newState = state
        .filter(item => item.id !== action.payload);

      return newState
    }

    case 'SAVE_TASK': {
      let newState = [...state];

      if (action.id) {
        const taskItemPosition = newState
          .findIndex(item => item.id === action.id);
        newState[taskItemPosition].title = action.title;
        newState[taskItemPosition].description = action.description;
        newState[taskItemPosition].priority = action.priority;
        newState[taskItemPosition].complited = action.complited;

      } else {
        const newTask = {
          title: action.title,
          description: action.description,
          date: new Date(),
          priority: action.priority,
          complited: action.complited,
          id: shortid.generate(),
        }
        newState.push(newTask);
      }

      return newState
    }

    case 'SORT_TASK_LIST': {
      let newState =[...state];
      
      if (action.payload === 'hight') {
        return newState.sort(item => item.priority !== action.payload)
      }

      if (action.payload === 'low') {
        return newState.sort(item => item.priority !== action.payload)
      }

      if (action.payload === 'newest') {
        return newState.sort(function(a, b) {
          return b.date.getTime() - a.date.getTime();
        });
      }

      if (action.payload === 'oldest') {
        return newState.sort(function(a, b) {
          return a.date.getTime() - b.date.getTime();
        });
      }

      return newState
    }

    default:
      return state;
  }
}

export default showTaskList;