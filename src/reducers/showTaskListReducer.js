import initialState from '../constants/initialState';


function showTaskList (state = initialState, action) {
  switch (action.type) {

    case 'GET_TASKS': {
      return action.payload
    }

    case 'DELETE_TASK': { 
      const newState = state
        .filter(item => item._id !== action.payload._id);

      return newState
    }

    case 'ADD_TASK': {
      let newState = [...state];
      const { _id, title, description, priority, complited } = action.payload;
      const newTask = {
        _id,
        title,
        description,
        date: new Date(),
        priority,
        complited,
      }
      newState.push(newTask);

      return newState
    }

    case 'UPDATE_TASK': {
      let newState = [...state];
      const { _id, title, description, priority, complited } = action.payload;
      const taskItemPosition = newState
        .findIndex(item => item._id === _id);
      newState[taskItemPosition].title = title;
      newState[taskItemPosition].description = description;
      newState[taskItemPosition].priority = priority;
      newState[taskItemPosition].complited = complited;

      return newState;
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
          const dateForCompareA = (new Date(a.date)).getTime();
          const dateForCompareB = (new Date(b.date)).getTime(); 

          return dateForCompareB - dateForCompareA;
        });
      }

      if (action.payload === 'oldest') {
        return newState.sort(function(a, b) {
          const dateForCompareA = (new Date(a.date)).getTime();
          const dateForCompareB = (new Date(b.date)).getTime(); 

          return dateForCompareA - dateForCompareB;
        });
      }

      return newState
    }

    case 'REFRESH_TASK_LIST': { 
      const newState = [...action.payload]
      return newState
    }

    default:
      return state;
  }
}

export default showTaskList;